import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzDatepickerModule, MzSelectModule, MzTextareaModule, MzIconModule, MzIconMdiModule, MzPaginationModule, MzInputModule, MzButtonModule, MzValidationModule } from 'ngx-materialize';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MzDatepickerModule,
    MzTextareaModule,
    MzSelectModule,
    MzIconModule,
    MzIconMdiModule,
    MzPaginationModule,
    MzInputModule,
    MzButtonModule,
    MzValidationModule
  ]
})
export class SharedModule { }
