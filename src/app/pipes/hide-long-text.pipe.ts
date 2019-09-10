import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'hideLongText'
})
export class HideLongTextPipe implements PipeTransform {
  transformInputIsNotAStringWarning =
    'hide long pipe transform input is not a string'
  textLengthLimit = 25

  transform(value: string): string {
    if (typeof value === 'string') {
      return value.length > this.textLengthLimit
        ? value.substr(0, this.textLengthLimit) + '...'
        : value
    } else {
      console.warn(this.transformInputIsNotAStringWarning)
      return value
    }
  }
}
