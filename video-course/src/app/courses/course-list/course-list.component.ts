import { Component, Input, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { OrderByPipe } from '../../pipes/order-by.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

import { CoursesService } from '../../services/courses.service';
@Component({
  selector: 'vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ OrderByPipe, FilterPipe ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  public courses;
  @Input() search: string;

  constructor(private orderByPipe: OrderByPipe, private filterPipe: FilterPipe, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.orderByPipe.transform(this.coursesService.getList()) || [];
    // Subscribe to the changes in a course list from course service
    this.coursesService.courseListUpdated.subscribe(courseList => this.courses = this.orderByPipe.transform(courseList));
    console.log('init course list');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setNewCoursesList(changes.search.currentValue);
  }
  
  setNewCoursesList(searchParam) {
    this.courses = this.filterPipe.transform(searchParam, this.coursesService.getList());
  }
}
