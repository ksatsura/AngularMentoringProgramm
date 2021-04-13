import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { coursesList } from '../mock-data/mock-data';
import { ActivatedRoute } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      providers: [ { provide: ActivatedRoute, useValue: fakeActivatedRoute } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const courseList = fixture.debugElement.componentInstance;
    courseList.courses = coursesList;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a courses list as mock data', () => {
    expect(component.courses).toEqual(coursesList);
  });
});
