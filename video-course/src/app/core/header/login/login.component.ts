import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick() {
    console.log('Login was clicked');
  }
}
