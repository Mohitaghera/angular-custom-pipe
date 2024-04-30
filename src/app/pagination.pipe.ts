import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: any, currentPage: number, itemsPerPage: number ): any[] {
    const startIndex = (currentPage - 1) * itemsPerPage;    
    return value.slice(startIndex, startIndex + itemsPerPage);  }

}
