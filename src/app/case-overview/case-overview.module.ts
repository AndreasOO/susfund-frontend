import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralOverviewComponent } from './general-overview/general-overview.component';



@NgModule({
  declarations: [
    GeneralOverviewComponent
  ],
  exports: [
    GeneralOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CaseOverviewModule { }
