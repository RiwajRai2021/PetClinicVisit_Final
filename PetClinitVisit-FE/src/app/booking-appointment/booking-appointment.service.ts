import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookAppointment } from '../bookappointment';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {
  private apiUrl = 'http://localhost:8087/bookappointment'; // Spring Boot API endpoint
  constructor(private http: HttpClient) { }
   // Book Appointment
   bookAppointment(bookappointment: BookAppointment): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookappointment);
  }
  
}