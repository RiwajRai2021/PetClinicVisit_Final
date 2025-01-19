import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Owner } from '../owner';
import { OwnerRegistrationService } from './owner-registration.service';


@Component({
  selector: 'app-owner-registration',
  standalone: true,
  imports: [FormsModule,HttpClientModule, CommonModule],
  templateUrl: './owner-registration.component.html',
  styleUrl: './owner-registration.component.css'
})
export class OwnerRegistrationComponent {
  owner: Owner = {
    id: -1,
    name: '',
    email: '',
    phone: '',
    address: ''    
  };

  message = '';

  constructor(private registrationService: OwnerRegistrationService) { }
  // Handle form submission
  onSubmit() {
    this.registrationService.registerOwner(this.owner).subscribe({
      next: (response) => {
        this.message = 'Owner registered successfully!';
      },
      error: (error) => {
        this.message = 'Owner registration failed: ' + error.error?.message;
      }
    });
  }
  
}