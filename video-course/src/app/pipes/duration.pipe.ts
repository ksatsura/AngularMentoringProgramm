import { Pipe, PipeTransform } from '@angular/core';

const MIN_IN_HOUR = 60;

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: string): string {
    const durationToNumber = Number(duration);

    if (durationToNumber > MIN_IN_HOUR) {
      const hours = Math.floor(durationToNumber / MIN_IN_HOUR);

      return `${hours} h ${durationToNumber- hours * MIN_IN_HOUR} min`;
    } else {
      return `${duration} min`
    }
  }
}
