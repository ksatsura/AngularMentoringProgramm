import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginModalModule } from './login-modal/login-modal.module';
import { FilterPipe } from './pipes/filter.pipe';
import { AddCourseModalModule } from './add-course-modal/add-course-modal.module';
import { VcRoutingModule } from './vc-routing.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { CourseDetailsModule } from './course-details/course-details.module';
import { CacheRouteReuseStrategy } from './custom-route-strategy';
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
    VcRoutingModule,
    PageNotFoundModule,
    CourseDetailsModule,
  ],
  providers:  [{
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
