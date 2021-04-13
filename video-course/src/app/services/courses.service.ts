import { Injectable, EventEmitter, Output } from '@angular/core';
import { Course } from '../models/course-model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private subject: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  coursesList = this.subject.asObservable();

  @Output() courseListUpdated = new EventEmitter();

  constructor(private http: HttpClient) { }

  getList({ start = '0', count = '4', textFragment = undefined } = {}) {
    const draftParams = { start, count };
    const params = textFragment ? { textFragment, ...draftParams } : draftParams;
  
      this.http.get<any>(`${environment.apiUrl}/courses`, { params })
        .subscribe(
          courses => {
            this.subject.next(courses);
        },
        err => err);
  }

  createCourse(courseData: Course) {
    const lastValue = this.subject.getValue();
    this.subject.next(lastValue.concat({ id: lastValue.length, ...courseData }));
  }

  getItemById(id: Number) {
    return this.subject.getValue().find(item => item.id === id);
  }

  updateItem(id: Number, courseData: Course) {
    const lastValue = this.subject.getValue();
    const newValue = lastValue.reduce(
      (acc: Course[], course: Course) => course.id === id ? acc.concat({id, ...courseData}) : acc.concat(course), []);

    this.subject.next(newValue);
  }

  removeItem(id: Number) {
    const newValue = this.subject.getValue().reduce(
      (acc: Course[], course: Course) => course.id === id ? acc : acc.concat(course), []);

    this.subject.next(newValue);
  }
}
