import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services/courses.service';

const DEFAULT_COURSE_COUNT = 4;

@Component({
  selector: 'vc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  coursesCount = DEFAULT_COURSE_COUNT;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.coursesList.subscribe(courses => this.courses = courses)
    this.coursesService.getList();

    console.log('courses updated', this.courses);
  }

  getSearchResults(param: string): void {
    this.coursesService.getList({ textFragment: param });
  }

  loadMoreCourses(): void {
    this.coursesCount = this.coursesCount + 4;

    this.coursesService.getList({ count: `${this.coursesCount}` });
  }
}
