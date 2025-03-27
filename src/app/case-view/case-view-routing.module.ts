import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaseOverviewComponent} from '../case-view/case-overview/case-overview.component';
import {CaseMainViewComponent} from '../case-view/case-main-view/case-main-view.component';

const routes: Routes = [
  {path: 'cases/:id',
    component: CaseMainViewComponent,
  children: [
    { path: 'overview', component: CaseOverviewComponent}
  ]},
  // {path: 'cases/:id', component: CaseOverviewComponent},
  // {path: '', component: CaseOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseViewRoutingModule { }
