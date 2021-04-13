import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseModalComponent } from './add-course-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '../../services/courses.service';
import { MockCourseService } from '../../courses/mock-data/mock-course-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';

describe('AddCourseModalComponent', () => {
  let component: AddCourseModalComponent;
  let fixture: ComponentFixture<AddCourseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
        provide: CoursesService,
        useClass: MockCourseService
        },
        FormBuilder,
    ],
      declarations: [ AddCourseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
