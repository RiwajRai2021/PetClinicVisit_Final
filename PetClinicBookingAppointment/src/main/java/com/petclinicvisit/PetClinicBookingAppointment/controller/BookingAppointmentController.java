package com.petclinicvisit.PetClinicBookingAppointment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.petclinicvisit.PetClinicBookingAppointment.model.BookingAppointment;
import com.petclinicvisit.PetClinicBookingAppointment.model.Pet;
import com.petclinicvisit.PetClinicBookingAppointment.service.BookAppointmentService;

import reactor.core.publisher.Mono;


//Add Logger
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@Configuration
@CrossOrigin(origins = "*")
@RequestMapping(value = "/bookingAppointment")
public class BookingAppointmentController {
 
 private static final Logger logger = LoggerFactory.getLogger(BookingAppointmentController.class);

 private WebClient webClient;

 @Autowired
 private BookAppointmentService bookAppointmentService;

 @Autowired
 private WebClient.Builder webClientBuilder;

 @PostMapping
 public ResponseEntity<?> createBookingAppointment(@RequestBody BookingAppointment bookingAppointment) {
     webClient = webClientBuilder.baseUrl("http://localhost:8086").build();
     Mono<Pet> petMono = webClient.get()
             .uri("/pet/{id}", bookingAppointment.getPetId())
             .retrieve()
             .bodyToMono(Pet.class);

     try {
         Pet pet = petMono.block();
         BookingAppointment createdBookingAppointment = bookAppointmentService.saveBookingAppointment(bookingAppointment);
         return ResponseEntity.status(HttpStatus.CREATED).body(createdBookingAppointment);
     } catch (WebClientResponseException.NotFound e) {
         logger.error("Pet with ID {} not found", bookingAppointment.getPetId(), e);
         return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pet with ID " + bookingAppointment.getPetId() + " not found");
     } catch (Exception e) {
         logger.error("Error occurred while processing the booking appointment request", e);
         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing the request: " + e.getMessage());
     }
 }
}
