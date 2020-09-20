import { Component, ViewChild } from '@angular/core';
import { IRecord } from '../config';
import { ReportsBaseService } from '../model/reports-base.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent {
  
  constructor(private reportsBase: ReportsBaseService) {
   }

  @ViewChild('infoOfReport', {static: true})
  public infoOfReport: any;

  @ViewChild('nameOfReport', {static: true})
  public nameOfReport: any;

  @ViewChild('reportForm', {static: true})
  public reportForm: any;

  public dateOfReport = '';
  public errorMessages = {
    comment: {
      required: 'Обязательное для заполнения поле длиной не более 150 символов'
    }, 
    date: {
      required: 'Обязательное для заполнения поле'
    }, 
    name: {
      required: 'Обязательное для заполнения поле'
    }
  }

  get uniqueID() {
    return this.reportsBase.generateUniqueID()
  }

  public addReport(report: {date: string, project: string, commentary: string}) {
    if (this.infoOfReport.ngControl.control.value === '') // костыль - после того как навесил на textarea директиву из materialize - не смог разобраться как правильно сбросить value у textarea
    {
      return
    }
    let {date, project, commentary} = report;
    let newReport: IRecord = {
      date,
      project,
      commentary,
      id: this.uniqueID
    }
    this.reportsBase.addReport(newReport);
    
    this.dateOfReport = '';
    this.infoOfReport.elementRef.nativeElement.value = '';
    this.infoOfReport.ngControl.control.value = '';
  }

  public options: Pickadate.DateOptions = {
    format: 'dd.mm.yyyy',
    formatSubmit: 'yyyy-mm-dd',
  };
}
