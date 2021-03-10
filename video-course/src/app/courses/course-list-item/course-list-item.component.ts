import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course-model';

@Component({
  selector: 'vc-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() courseItem: Course;

  constructor() {
  }

  deleteItem(itemId: Number) {
    console.log(`The item with id ${itemId} is deleted`);
  }

  editItem(itemId: Number) {
    console.log(`The item with id ${itemId} is edited`);
  }

  ngOnInit(): void {
  }
}
