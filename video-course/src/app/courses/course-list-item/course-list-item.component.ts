import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course-model';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'vc-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() courseItem: Course;
  date: string;

  constructor(private router: Router, private coursesService: CoursesService) {
  }

  deleteItem(itemId: Number) {
    console.log(`The item with id ${itemId} is deleted`);
    this.coursesService.removeItem(itemId);
  }

  editItem(itemId: Number) {
    console.log(`The item with id ${itemId} is edited`);
    this.router.navigate([`courses/${itemId}`])
  }

  ngOnInit(): void {
  }
}
