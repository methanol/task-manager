import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneTaskComponent } from './one-task/one-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ReportsBaseService } from './model/reports-base.service';
import { PaginationFilterPipe } from './pagination-filter.pipe';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ReportCreateComponent } from './report-create/report-create.component';

@NgModule({
  declarations: [
    AppComponent,
    OneTaskComponent,
    PaginationFilterPipe,
    ProjectFilterPipe,
    ReportCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [ReportsBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
