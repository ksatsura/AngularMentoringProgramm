import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  logIn({ login, password }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.apiUrl}/auth/login`, { login, password })
        .subscribe(user => {
          localStorage.setItem('token', user.token);

          resolve(true);
        }, err => reject(err));
      })
  }

  logOff() {
    console.log('Logoff was clicked');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserInfo(): Promise<any> {
    const token = localStorage.getItem('token');

    return new Promise((resolve, reject) => {
      return this.http.post<any>(`${environment.apiUrl}/auth/userinfo`, { token })
      .subscribe(user => resolve(user), error => reject(error));
    })
  }
}
