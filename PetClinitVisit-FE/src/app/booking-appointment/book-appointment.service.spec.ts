import { TestBed } from '@angular/core/testing';
import { BookAppointmentService } from './booking-appointment.service';


describe('BookAppointmentService', () => {
  let service: BookAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});