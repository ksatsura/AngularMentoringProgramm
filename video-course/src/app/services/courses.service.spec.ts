import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { coursesList } from '../courses/mock-data';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the courses list when method getList was called', () => {
    expect(service.getList()).toEqual(coursesList);
  });
});
