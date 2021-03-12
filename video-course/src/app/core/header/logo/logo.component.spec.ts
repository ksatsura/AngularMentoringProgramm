import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onLogoClick method at click on Logo element', () => {
    spyOn(component, 'onLogoClick');

    const event = new Event('click');
    let divElement = fixture.debugElement.nativeElement.querySelector('div');
    divElement.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.onLogoClick).toHaveBeenCalled();
  });

  it('should insert in console "Logo was clicked" when onLogoClick method was called', () => {
    component.onLogoClick();

    expect(console.log).toHaveBeenCalledWith('Logo was clicked');
  });
});
