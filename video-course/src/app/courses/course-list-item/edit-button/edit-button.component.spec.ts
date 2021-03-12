import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonComponent } from './edit-button.component';

describe('EditButtonComponent', () => {
  let component: EditButtonComponent;
  let fixture: ComponentFixture<EditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should invoke onClick method at click on Edit button', () => {
    spyOn(component, 'editItemById');

    const event = new Event('click');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.editItemById).toHaveBeenCalled();
  });
});
