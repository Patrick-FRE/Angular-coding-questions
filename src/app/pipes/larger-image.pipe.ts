import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'largerImage'
})
export class LargerImagePipe implements PipeTransform {
  transform(value: string): string {
    return value.substr(0, value.length - 13) + '300x300bb.jpg'
  }
}
