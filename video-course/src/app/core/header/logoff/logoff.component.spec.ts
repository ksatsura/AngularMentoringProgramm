import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffComponent } from './logoff.component';

describe('LogoffComponent', () => {
  let component: LogoffComponent;
  let fixture: ComponentFixture<LogoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
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
    component.onLogoffClick();

    expect(console.log).toHaveBeenCalledWith('Logoff was clicked');
  });
});
