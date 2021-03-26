import { Injectable, EventEmitter, Output } from '@angular/core';
import { Course } from '../models/course-model';
import { coursesList } from '../courses/mock-data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Course[] = coursesList;
  @Output() courseListUpdated = new EventEmitter();

  constructor() { }

  getList(): Course[] {
    return this.coursesList;
  }

  createCourse(courseData: Course) {
    this.coursesList = this.coursesList.concat({ id: this.coursesList.length, ...courseData });
  }

  getItemById(id: Number) {
    return this.coursesList.find(item => item.id === id);
  }

  updateItem(id: Number, courseData: Course) {
    this.coursesList = this.coursesList.reduce(
      (acc: Course[], course: Course) => course.id === id ? acc.concat({...courseData}) : acc.concat(course), []);
  }

  removeItem(id: Number) {
    this.coursesList = this.coursesList.reduce(
      (acc: Course[], course: Course) => course.id === id ? acc : acc.concat(course), []);
    this.courseListUpdated.emit(this.coursesList);
  }
}
