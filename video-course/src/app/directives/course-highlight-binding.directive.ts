import { Directive, Input, ElementRef, OnInit } from '@angular/core';

const MILLISECOND_IN_DAY = 86400000;

@Directive({
  selector: '[vcCourseHighlightBinding]'
})
export class CourseHighlightBindingDirective implements OnInit {
  @Input('date')
  public date: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.setColorOfBorder();
  }

  setColorOfBorder() {
    const parsedCreationDate = Date.parse(this.date);
    const currentDate = Date.now();

    this.element.nativeElement.style.borderWidth = '3px';

    if (parsedCreationDate < currentDate && (parsedCreationDate >= (currentDate - 14 * MILLISECOND_IN_DAY))) {
      this.element.nativeElement.style.borderColor = 'green';
    } else if (parsedCreationDate > currentDate) {
      this.element.nativeElement.style.borderColor = 'blue';
    }
  }
}
