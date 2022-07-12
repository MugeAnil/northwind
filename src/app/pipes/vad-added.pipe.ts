import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vadAdded'
})
export class VadAddedPipe implements PipeTransform {

  transform(value: number, rate:number  ): number {
    return value + (value*rate/100) ;
  }

}
