import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate',credentials);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
     name: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
