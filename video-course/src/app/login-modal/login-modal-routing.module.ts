import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';

const routes: Routes = [
  {
    path: '',
    component: LoginModalComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class LoginModalRoutingModule { }