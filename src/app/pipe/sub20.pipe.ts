import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub20'
})
export class Sub20Pipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 20) {
      return value.substring(0, 20) + '...';
    } else { return value; }
  }

}
