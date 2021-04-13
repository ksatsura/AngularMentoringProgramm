import { TestBed, getTestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthenticationService ]
    });
    injector = getTestBed();
    service = injector.get(AuthenticationService);
    httpMock = injector.get(HttpTestingController);

    spyOn(console, 'log');
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('logIn()', () => {
    it('should return token if login and password correct', () => {
      const dummyUsers = [
        { login: 'John' },
        { login: 'Doe' }
      ];
  
      service.logIn({ login: 'login', password: 'password'}).then(() => {
        expect(localStorage.getItem('token')).toEqual('12345');
      });
  
      const req = httpMock.expectOne(`${environment.apiUrl}/auth/login`);
      expect(req.request.method).toBe("POST");
      req.flush({ name: 'user', token: '12345'});
    });
  });

  describe('logOff()', () => {
    it('should return "Logoff was clicked" when method logOff was called', () => {
      service.logOff();
      expect(console.log).toHaveBeenCalledWith('Logoff was clicked');
    })
  });
});
