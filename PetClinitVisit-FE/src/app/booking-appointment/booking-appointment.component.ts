import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookAppointment } from '../bookappointment';
import { HttpErrorResponse } from '@angular/common/http';
import { BookAppointmentService } from './booking-appointment.service';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [FormsModule,HttpClientModule, CommonModule],
  templateUrl: './booking-appointment.component.html',
  styleUrl: './booking-appointment.component.css'
})
export class BookAppointmentComponent {
  bookappointment: BookAppointment = {
    id: -1,
    petId: null,
    appointmentDate: new Date(),
    reason: '',
    additionalNotes: ''    
  };

  message = '';

  constructor(private bookAppointmentService: BookAppointmentService) { }
  // Handle form submission
  onSubmit() {
    this.bookAppointmentService.bookAppointment(this.bookappointment).subscribe({
      next: (response) => {
        this.message = 'Appointment booked successfully!';
      },
      error: (error: HttpErrorResponse) => {
        // Access the message from the response body in case of an error
        if (error.status === 404) {
          // Example: Pet not found, HTTP 404
          this.message = 'Booking Appointment Failed: '+error.error;
        } else if (error.status === 500) {
          // Example: Internal server error, HTTP 500
          this.message = error.error?.message || 'Booking Appointment Failed: An error occurred on the server';
        } else {
          // Generic error handling
          this.message = error.error?.message || `Booking Appointment Failed: Unexpected error: ${error.message}`;
        }

        console.error('Error details:', error); // This will log the full error to the console for debugging
      }
    });
  }
}