import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstChar = value.substring(0,1).toUpperCase();
    let allOtherChars = value.substring(1,value.length).toLowerCase();

    return firstChar + allOtherChars;
  }

}
