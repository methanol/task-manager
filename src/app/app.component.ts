import { Component, OnInit } from '@angular/core';
import { ReportsBaseService } from './model/reports-base.service';
import { IRecord } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title: string = 'task-manager';
  public pageCurrentIndex: number = 1;
  public pageCurrentSize: number = 5;
  public searchTerm: string;

  private reports: IRecord[] = [];

  constructor(private reportsBase: ReportsBaseService){}

  ngOnInit() {
    this.reports = this.reportsBase.getReports();
  }

  public get allReports() {
    return this.reports = this.reportsBase.getReports();
  }

  public onPageChange(event: number) {
    this.pageCurrentIndex = event;
  }

  public startSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public get actualItemsCount(): number {
    return this.searchTerm ? this.reports.filter((item: IRecord) => `${item.project}`.toLowerCase().includes(this.searchTerm.toLowerCase())).length : this.reports.length;
  }

  public sortForward() {
    this.reports.sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date == b.date) return 0;
      if (a.date < b.date) return -1;
    })
  }

  public sortBackward() {
    this.reports.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date == b.date) return 0;
      if (a.date < b.date) return 1;
    })
  }

}