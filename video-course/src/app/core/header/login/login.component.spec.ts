import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
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

  it('should insert in console "Login was clicked" when onLoginClick method was called', () => {
    component.onLoginClick();

    expect(console.log).toHaveBeenCalledWith('Login was clicked');
  });
});
