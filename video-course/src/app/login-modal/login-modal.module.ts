import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginModalRoutingModule } from './login-modal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginModalComponent, LoginModalComponent],
  imports: [
    CommonModule,
    LoginModalRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LoginModalComponent,
  ]
})
export class LoginModalModule { }
