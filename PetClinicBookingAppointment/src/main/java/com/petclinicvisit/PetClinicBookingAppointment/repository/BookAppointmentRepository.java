package com.petclinicvisit.PetClinicBookingAppointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinicvisit.PetClinicBookingAppointment.model.BookingAppointment;

public interface BookAppointmentRepository extends JpaRepository<BookingAppointment, Integer>{

}
