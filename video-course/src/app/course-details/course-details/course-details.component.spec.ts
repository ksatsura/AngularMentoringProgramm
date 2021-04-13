import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsComponent } from './course-details.component';
import { CoursesService } from '../../services/courses.service';
import { MockCourseService } from '../../courses/mock-data/mock-course-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;
  const fakeActivatedRoute = {
    snapshot: { params: { id: 1 } }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{
        provide: CoursesService,
        useClass: MockCourseService
      },
      { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      FormBuilder
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
