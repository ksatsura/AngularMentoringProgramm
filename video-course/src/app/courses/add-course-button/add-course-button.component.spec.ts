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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
