import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { OrderByPipe } from '../../pipes/order-by.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

import { CoursesService } from '../../courses.service';

@Component({
  selector: 'vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [ OrderByPipe, FilterPipe ]
})
export class CourseListComponent implements OnInit {
  public courses;
  @Input() search: string;

  constructor(private orderByPipe: OrderByPipe, private filterPipe: FilterPipe, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.orderByPipe.transform(this.coursesService.getList()) || [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setNewCoursesList(changes.search.currentValue);
  }
  
  setNewCoursesList(searchParam) {
    console.log('inside set new courses list', searchParam);
    this.courses = this.filterPipe.transform(searchParam, this.coursesService.getList());
  }
}
