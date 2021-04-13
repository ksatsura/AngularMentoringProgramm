import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '../services/courses.service';
import { MockCourseService } from '../courses/mock-data/mock-course-service';
import { AuthenticationService } from './authentication.service';
import { MockAuthService } from '../courses/mock-data/mock-auth-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [
      {
        provide: CoursesService,
        useClass: MockCourseService
      },
      {
        provide: AuthenticationService,
        useClass: MockAuthService
      }
    ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
