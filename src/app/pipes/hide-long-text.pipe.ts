import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideLongText'
})
export class HideLongTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 25 ? value.substr(0, 25) + "..." : value
  }

}
