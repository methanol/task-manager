import { Pipe, PipeTransform } from '@angular/core';
import { IRecord } from './config';

@Pipe({
  name: 'paginationFilter',
  pure: false
})
export class PaginationFilterPipe implements PipeTransform {

  transform(records: IRecord[], pageCurrentIndex: number): IRecord[] {
      return (records.length < 6) ? records : records.slice((pageCurrentIndex - 1) * 5, pageCurrentIndex * 5);
  }
}
