import { Component, OnInit } from '@angular/core';
import { coursesList } from '../mock-data';

@Component({
  selector: 'vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courses;

  constructor() { }

  ngOnInit(): void {
    this.courses = coursesList;
  }
}
