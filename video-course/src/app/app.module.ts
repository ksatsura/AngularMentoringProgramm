import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './login-modal/token.interceptor';

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
    HttpClientModule,
  ],
  providers:  [{
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
