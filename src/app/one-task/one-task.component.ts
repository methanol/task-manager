import { Component, OnInit, Input } from '@angular/core';
import { IRecord } from '../config';
import { ReportsBaseService } from '../model/reports-base.service';

@Component({
  selector: 'app-one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.css']
})
export class OneTaskComponent implements OnInit {

  @Input()
  public record: IRecord;

  private reports: IRecord[] = [];
  
  constructor(private reportsBase: ReportsBaseService) { }

  ngOnInit() {
    this.reports = this.reportsBase.getReports();
  }

  public deleteRecord(id: number): void {
    this.reportsBase.deleteReport(id);
  }

}
