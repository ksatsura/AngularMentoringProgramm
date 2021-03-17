import { Pipe, PipeTransform } from '@angular/core';

const MIN_IN_HOUR = 60;

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration > MIN_IN_HOUR) {
      const hours = Math.floor(duration / MIN_IN_HOUR);

      return `${hours} h ${duration - hours * MIN_IN_HOUR} min`;
    } else {
      return `${duration} min`
    }
  }
}
