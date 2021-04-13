import { Component, Input, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../models/course-model';

@Component({
  selector: 'vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[];

  constructor() { }

  ngOnInit(): void {
    console.log('courses inside course list', this.courses);
  }
}
