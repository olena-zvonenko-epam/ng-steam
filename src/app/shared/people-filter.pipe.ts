import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peopleFilter'
})
export class PeopleFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
