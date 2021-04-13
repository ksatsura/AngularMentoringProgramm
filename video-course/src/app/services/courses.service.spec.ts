import { TestBed, getTestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { coursesList } from '../courses/mock-data/mock-data';

import { environment } from '../../environments/environment';

describe('CoursesService', () => {
  let injector: TestBed;
  let service: CoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CoursesService ]
    });
    injector = getTestBed();
    service = injector.get(CoursesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getList()', () => {
    it('should return an Observable<User[]>', () => {
      service.getList();
      
      service.coursesList.subscribe(courses => {
        if (courses.length > 0) {
          expect(courses).toEqual(coursesList);
        }
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/courses?start=0&count=4`);
      expect(req.request.method).toBe("GET");
      req.flush(coursesList);
    });
  });
});
