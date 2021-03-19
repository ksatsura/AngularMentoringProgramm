import { Injectable } from '@angular/core';
import { Course } from './models/course-model';
import { coursesList } from './courses/mock-data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getList(): Course[] {
    return coursesList;
  }

  createCourse() {

  }

  getItemById() {

  }

  updateItem() {

  }

  removeItem() {

  }

}
