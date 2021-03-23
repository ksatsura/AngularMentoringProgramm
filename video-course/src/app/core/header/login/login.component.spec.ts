import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../../login-modal/authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub: AuthenticationService;

  authServiceStub = {
    logIn: () => {},
    logOff: () => {},
    isAuthenticated: () => {},
    getUserInfo: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:  [ { provide: AuthenticationService, useValue: authServiceStub } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onLoginClick method at click on Login link', () => {
    spyOn(component, 'onLoginClick');

    const event = new Event('click');
    let link = fixture.debugElement.nativeElement.querySelector('a');
    link.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.onLoginClick).toHaveBeenCalled();
  });

  it('should insert in console "Login was successful" when onLoginClick method was called', () => {
    spyOn(authServiceStub, 'logIn');

    component.onLoginClick();

    expect(authServiceStub.logIn).toHaveBeenCalled();
  });
});
