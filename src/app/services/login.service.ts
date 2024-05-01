import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://onlinefooddeliverybackend20240501091127.azurewebsites.net/User/login'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
