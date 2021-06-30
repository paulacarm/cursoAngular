import { KeyValueDiffers, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase'
})
export class UpercasePipe implements PipeTransform {

  transform(value: string):string {
    if(!value)return ''
  
    return value.toUpperCase()
  }

}
