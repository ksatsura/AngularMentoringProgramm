import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.authService.logIn();
  }
}
