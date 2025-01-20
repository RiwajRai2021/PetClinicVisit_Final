import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pet } from '../pet';
import { Owner } from '../owner';
import { PetRegistrationService } from './pet-registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pet-registration',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './pet-registration.component.html',
  styleUrls: ['./pet-registration.component.css']
})
export class PetRegistrationComponent {
  pet: Pet = new Pet(-1, '', '', '', 0, new Owner(-1, '', '', '', ''));

  message = '';

  constructor(private registrationService: PetRegistrationService) { }

  // Handle form submission
  onSubmit() {
    this.registrationService.registerPet(this.pet).subscribe({
      next: (response) => {
        this.message = 'Pet registered successfully!';
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 0) {
          this.message = 'An error occurred: ' + error.message;
        } else {
          this.message = `Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`;
        }
        console.error('Full error details:', error);
      }
    });
  }
}