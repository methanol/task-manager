import { Pipe, PipeTransform } from '@angular/core';
import { IRecord } from './config';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(records: IRecord[], searchTerm: string): IRecord[] {
    return !searchTerm ? records : records.filter((item: IRecord) => `${item.project}`.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
