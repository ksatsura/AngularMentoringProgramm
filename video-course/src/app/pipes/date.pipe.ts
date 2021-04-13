import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(date: string): string {
    const parsedDate = Date.parse(date);
    const transformedDate = new Date(parsedDate);
    // const transformedDate = new Date(date);

    return transformedDate?.toDateString();
  }

}
