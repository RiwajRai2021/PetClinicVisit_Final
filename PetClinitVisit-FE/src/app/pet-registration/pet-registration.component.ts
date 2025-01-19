import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PetRegistrationService } from './pet-registration.service';
import { Pet } from '../pet';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pet-registration',
  standalone: true,
  imports: [FormsModule,HttpClientModule, CommonModule],
  templateUrl: './pet-registration.component.html',
  styleUrl: './pet-registration.component.css'
})
export class PetRegistrationComponent {
  pet: Pet = {
    id: -1,
    name: '',
    species: '',
    breed: '',
    age: null,
    ownerId: null    
  };

  message = '';
  constructor(private registrationService: PetRegistrationService) { }
  // Handle form submission
  onSubmit() {
    this.registrationService.registerPet(this.pet).subscribe({
      next: (response) => {
        this.message = 'Pet registered successfully!';
      },
      error: (error: HttpErrorResponse) => {
        // Access the message from the response body in case of an error
        if (error.status === 404) {
          // Example: Owner not found, HTTP 404
          this.message = 'Pet Registration Failed: '+error.error;
        } else if (error.status === 500) {
          // Example: Internal server error, HTTP 500
          this.message = error.error?.message || 'Pet Registration Failed: An error occurred on the server';
        } else {
          // Generic error handling
          this.message = error.error?.message || `Pet Registration Failed: Unexpected error: ${error.message}`;
        }

        console.error('Error details:', error); // This will log the full error to the console for debugging
      }
    });
  }
}