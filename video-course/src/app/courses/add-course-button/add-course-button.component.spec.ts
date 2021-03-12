import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseButtonComponent } from './add-course-button.component';

describe('AddCourseButtonComponent', () => {
  let component: AddCourseButtonComponent;
  let fixture: ComponentFixture<AddCourseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onClick method at click on Add course button', () => {
    spyOn(component, 'onClick');

    const event = new Event('click');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.onClick).toHaveBeenCalled();
  });

  it('should insert in console "Add course button was clicked" when onClick method was called', () => {
    component.onClick();

    expect(console.log).toHaveBeenCalledWith('Add course button was clicked');
  });
});
