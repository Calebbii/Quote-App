import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePosted'
})
export class DatePostedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
