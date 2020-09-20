import { Injectable } from '@angular/core';
import {IRecord} from '../config';

@Injectable()
export class ReportsBaseService {

  private reports: IRecord[] = [];
  private id: number = 1;

  constructor() { }

  public generateUniqueID(): number {
    return ++this.id;
  }

  public getReports(): IRecord[] {
    return this.reports;
  }

  public addReport(item: IRecord): void {
    this.reports.push(item);
  }

  public deleteReport(id: number): void {
    this.reports = this.reports.filter(it => it.id != id);
  }

}