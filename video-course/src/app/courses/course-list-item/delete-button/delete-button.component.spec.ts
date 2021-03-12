import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteButtonComponent } from './delete-button.component';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onClick method at click on Delete button', () => {
    spyOn(component, 'deleteItemById');

    const event = new Event('click');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.deleteItemById).toHaveBeenCalled();
  });
});
