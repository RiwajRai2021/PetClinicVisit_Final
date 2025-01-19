import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../pet';

@Injectable({
  providedIn: 'root'
})
export class PetRegistrationService {
  private apiUrl = 'http://localhost:8086/pet'; // Ensure this matches your backend endpoint

  constructor(private http: HttpClient) { }

  // Register Pet
  registerPet(pet: Pet): Observable<any> {
    return this.http.post<any>(this.apiUrl, pet);
  }
}
