import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  logIn() {
    console.log('Login was successful');
  }

  logOff() {
    console.log('Logoff was clicked');
  }

  isAuthenticated(): boolean {
    return true;
  }

  getUserInfo() {

  }
}
