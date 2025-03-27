import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseOverviewComponent } from './case-overview/case-overview.component';
import { CaseSidebarMenuComponent } from './case-sidebar-menu/case-sidebar-menu.component';
import { CaseMainViewComponent } from './case-main-view/case-main-view.component';
import {CaseViewRoutingModule} from './case-view-routing.module';


@NgModule({
  declarations: [
    CaseOverviewComponent,
    CaseSidebarMenuComponent,
    CaseMainViewComponent
  ],
  exports: [
    CaseOverviewComponent
  ],
  imports: [
    CommonModule,
    CaseViewRoutingModule
  ]
})
export class CaseViewModule { }
