package com.petclinicvisit.PetClinicBookingAppointment.model;

import java.sql.Timestamp;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;

@Entity
public class BookingAppointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Ensure IDENTITY strategy
    private Integer id;
    private Integer petId;
    private Timestamp appointmentDateTime;
    private String reason;
    private String additionalNotes;
    
    @Version
    private Integer version; 

    public BookingAppointment() {
        super();
    }

    public BookingAppointment(Integer id, Integer petId, Timestamp appointmentDateTime, String reason,
                              String additionalNotes) {
        this.id = id;
        this.petId = petId;
        this.appointmentDateTime = appointmentDateTime;
        this.reason = reason;
        this.additionalNotes = additionalNotes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPetId() {
        return petId;
    }

    public void setPetId(Integer petId) {
        this.petId = petId;
    }

    public Timestamp getAppointmentDateTime() {
        return appointmentDateTime;
    }

    public void setAppointmentDateTime(Timestamp appointmentDateTime) {
        this.appointmentDateTime = appointmentDateTime;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getAdditionalNotes() {
        return additionalNotes;
    }

    public void setAdditionalNotes(String additionalNotes) {
        this.additionalNotes = additionalNotes;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "BookingAppointment [id=" + id + ", petId=" + petId + ", appointmentDateTime=" + appointmentDateTime
                + ", reason=" + reason + ", additionalNotes=" + additionalNotes + "]";
    }
}
