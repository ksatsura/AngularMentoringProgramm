import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationComponent } from './duration.component';
import { DurationPipe } from '../../../pipes/duration.pipe';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationComponent, DurationPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    component.courseDuration = 80;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
