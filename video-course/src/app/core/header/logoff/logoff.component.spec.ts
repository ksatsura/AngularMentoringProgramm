import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../../login-modal/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoffComponent } from './logoff.component';

describe('LogoffComponent', () => {
  let component: LogoffComponent;
  let fixture: ComponentFixture<LogoffComponent>;
  let authServiceStub;

  authServiceStub = {
    logIn: ({ login = 'login', password = 'password' }) => Promise.resolve({ login, password }),
    logOff: () => {},
    isAuthenticated: () => true,
    getUserInfo: () => Promise.resolve({}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoffComponent ],
      providers:  [ { provide: AuthenticationService, useValue: authServiceStub } ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onLogoffClick method at click on Logoff link', () => {
    spyOn(component, 'onLogoffClick');

    const event = new Event('click');
    let link = fixture.debugElement.nativeElement.querySelector('a');
    link.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.onLogoffClick).toHaveBeenCalled();
  });

  it('should insert in console "Logoff was clicked" when onLogoffClick method was called', () => {
    spyOn(authServiceStub, 'logOff');

    component.onLogoffClick();

    expect(authServiceStub.logOff).toHaveBeenCalled();
  });
});
