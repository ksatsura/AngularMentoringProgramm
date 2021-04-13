import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course-model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: Course[]): Course[] {
    return list.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }
}
