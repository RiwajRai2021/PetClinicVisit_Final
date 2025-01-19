import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookAppointment } from '../bookappointment';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {
  private apiUrl = 'http://ec2-54-86-178-106.compute-1.amazonaws.com:8087/bookingAppointment'; // Spring Boot API endpoint
  constructor(private http: HttpClient) { }
   // Book Appointment
   bookAppointment(bookappointment: BookAppointment): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookappointment);
  }
  
}