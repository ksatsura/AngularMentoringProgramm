import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../login-modal/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'vc-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  public loginForm: FormGroup;
  public error: { message: string } = { message: ''};

  constructor(private router: Router, private authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      login:  ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLoginButtonClick () {

    if (this.loginForm.invalid) {
      return;
    }
  
    const userData = this.loginForm.value;

    this.authService.logIn({ login: userData.login, password: userData.password })
      .then(() => this.router.navigate(['']) )
      .catch(err => this.error = { message: err.error});
  }

  onCancelButtonClick () {
    this.router.navigate(['']);
  }

}
