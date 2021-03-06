import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';
import { LogoffComponent } from './header/logoff/logoff.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SearchComponent, 
    LogoComponent, 
    LoginComponent, 
    LogoffComponent, BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BreadcrumbComponent,
  ]
})
export class CoreModule { }
