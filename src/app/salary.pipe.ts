import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
  standalone: true
})
export class SalaryPipe implements PipeTransform {

  transform(value: number) : string {
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'k';
    } else {
      return value.toString();
    }  
  }

}
