import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerRegistrationService {
  private apiUrl = 'http://ec2-54-86-178-106.compute-1.amazonaws.com:8085/owner'; // Spring Boot API endpoint
  constructor(private http: HttpClient) { }
   // Register owner
   registerOwner(owner: Owner): Observable<any> {
    return this.http.post<any>(this.apiUrl, owner);
  }
}