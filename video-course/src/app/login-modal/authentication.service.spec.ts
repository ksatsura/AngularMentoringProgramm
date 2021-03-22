import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);

    spyOn(console, 'log');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Login was successful" when method logIn was called', () => {
    service.logIn();
    expect(console.log).toHaveBeenCalledWith('Login was successful');
  })

  it('should return "Logoff was clicked" when method logOff was called', () => {
    service.logOff();
    expect(console.log).toHaveBeenCalledWith('Logoff was clicked');
  })
});
