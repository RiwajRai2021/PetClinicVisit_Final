package com.petclinicvisit.PetClinicBookingAppointment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicvisit.PetClinicBookingAppointment.model.BookingAppointment;
import com.petclinicvisit.PetClinicBookingAppointment.repository.BookAppointmentRepository;

import jakarta.transaction.Transactional;

@Service
public class BookingAppointmentServiceImpl implements BookAppointmentService{
	
	@Autowired
	private BookAppointmentRepository bookAppointmentRepository; 

	@Override
	@Transactional
	public BookingAppointment saveBookingAppointment(BookingAppointment bookingAppointment) {
		// TODO Auto-generated method stub
		return bookAppointmentRepository.save(bookingAppointment); 
	}
	
	

}
