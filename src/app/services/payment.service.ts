import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'https://onlinefooddeliverybackend20240501091127.azurewebsites.net/api/payments'; // Update with your backend API URL


  constructor(private http:HttpClient) { }
  processPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, paymentData);
  }
}
