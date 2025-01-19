import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../pet';

@Injectable({
  providedIn: 'root'
})
export class PetRegistrationService {
  private apiUrl = 'http://ec2-54-86-178-106.compute-1.amazonaws.com:8086/pet'; // Spring Boot API endpoint
  constructor(private http: HttpClient) { }
   // Register Pet
   registerPet(pet: Pet): Observable<any> {
    return this.http.post<any>(this.apiUrl, pet);
   }
}