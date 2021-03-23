import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginModalModule } from './login-modal/login-modal.module';
import { FilterPipe } from './pipes/filter.pipe';
import { AddCourseModalModule } from './add-course-modal/add-course-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    LoginModalModule,
    AddCourseModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
