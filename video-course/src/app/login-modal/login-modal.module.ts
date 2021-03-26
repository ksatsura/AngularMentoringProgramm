import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginModalRoutingModule } from './login-modal-routing.module';

@NgModule({
  declarations: [LoginModalComponent, LoginModalComponent],
  imports: [
    CommonModule,
    LoginModalRoutingModule,
  ],
  exports: [
    LoginModalComponent,
  ]
})
export class LoginModalModule { }
