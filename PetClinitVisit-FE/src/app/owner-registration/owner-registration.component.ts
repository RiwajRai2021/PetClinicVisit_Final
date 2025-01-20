import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Owner } from '../owner';
import { OwnerRegistrationService } from './owner-registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-owner-registration',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css']
})
export class OwnerRegistrationComponent {
  owner: Owner = new Owner(-1, '', '', '', '');

  message = '';

  constructor(private registrationService: OwnerRegistrationService) { }

  // Handle form submission
  onSubmit() {
    this.registrationService.registerOwner(this.owner).subscribe({
      next: (response) => {
        this.message = 'Owner registered successfully!';
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