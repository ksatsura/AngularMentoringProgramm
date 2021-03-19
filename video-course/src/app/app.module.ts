import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginPageModule } from './login-page/login-page.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
