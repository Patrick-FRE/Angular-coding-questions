import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largerImage'
})
export class LargerImagePipe implements PipeTransform {

  transform(value: string): string {
    //console.log(value.substr(0, value.length - 13) + "400x400bb.jpg")
    return value.substr(0, value.length - 13) + "400x400bb.jpg"
  }

}
