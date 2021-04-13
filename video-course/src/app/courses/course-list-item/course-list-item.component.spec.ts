import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesService } from '../../services/courses.service';
import { MockCourseService } from '../../courses/mock-data/mock-course-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ CourseListItemComponent ],
      providers: [{
        provide: CoursesService,
        useClass: MockCourseService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);

    component = fixture.componentInstance;
    component.courseItem = { 
      id: 1,
      name: 'Course 1 title',
      description: 'Corse 1 description',
      date: '09-03-2021',
      length: '60',
      isTopRated: 'true',
    };

    spyOn(console, 'log');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert in console "The item with id 1 is deleted" when deleteItem method was called', () => {
    component.deleteItem(component.courseItem.id);

    expect(console.log).toHaveBeenCalledWith('The item with id 1 is deleted');
  });

  it('should insert in console "The item with id 1 is edited" when editItem method was called', () => {
    component.editItem(component.courseItem.id);

    expect(console.log).toHaveBeenCalledWith('The item with id 1 is edited');
  });
});
