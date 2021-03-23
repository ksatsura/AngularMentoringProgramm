import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';


@NgModule({
  declarations: [LoginModalComponent, LoginModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModalComponent,
  ]
})
export class LoginModalModule { }
