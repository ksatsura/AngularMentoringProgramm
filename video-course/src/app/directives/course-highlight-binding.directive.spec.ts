import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CourseHighlightBindingDirective } from './course-highlight-binding.directive';


@Component({
  template: `<div [date]="'03-15-2021'" vcCourseHighlightBinding>Test highlight</div>
            <div [date]="'04-15-2021'" vcCourseHighlightBinding>Test highlight</div>
            <div [date]="'02-15-2021'" vcCourseHighlightBinding>Test highlight</div>
  `,
})
export class TestHightlightComponent {
  public date: string;
}

describe('CourseHighlightBindingDirective', () => {
  
  let component: TestHightlightComponent;
  let fixture: ComponentFixture<TestHightlightComponent>;
  let divElWithdirectives: DebugElement[];
  let directive: DebugElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [CourseHighlightBindingDirective, TestHightlightComponent]
    });
    fixture = TestBed.createComponent(TestHightlightComponent);

    component = fixture.componentInstance;

    divElWithdirectives = fixture.debugElement.queryAll(By.directive(CourseHighlightBindingDirective));

    fixture.detectChanges();
  });

  beforeEach(() => {
    const baseTime = new Date(2021, 2, 16);
    jasmine.clock().mockDate(baseTime);
  });

  it('should have three elements', () => {
    expect(divElWithdirectives.length).toBe(3);

  });

  it('should set green border when date between current date and two weeks ago', () => {
    const divEl = divElWithdirectives[0];

    expect(divEl.nativeElement.style.borderWidth).toBe('3px');
    expect(divEl.nativeElement.style.borderColor).toBe('green');
  });

  it('should set green border when the date is in future', () => {
    const divEl = divElWithdirectives[1];

    expect(divEl.nativeElement.style.borderColor).toBe('blue');
  });

  it('should set no border when the date is in past more than 2 weeks', () => {
    const divEl = divElWithdirectives[2];

    expect(divEl.nativeElement.style.borderColor).toBe('');
  });

});
