import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CoursesService } from '../../services/courses.service';
import { MockCourseService } from '../mock-data/mock-course-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{
        provide: CoursesService,
        useClass: MockCourseService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
