import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginButtonClick () {
    this.router.navigate(['courses']);
  }

  onCancelButtonClick () {
    this.router.navigate(['courses']);
  }

}
