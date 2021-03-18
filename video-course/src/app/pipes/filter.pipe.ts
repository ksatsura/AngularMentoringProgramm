import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchParam: string, list: Course[]): Course[] {
    if (!searchParam) {
      return list;
    }

    return list.filter(item => item.title.toLowerCase().includes(searchParam.toLowerCase()));
  }
}
