import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneralOverviewComponent} from './case-overview/general-overview/general-overview.component';
import {MyCasesListComponent} from './cases-list/my-cases-list/my-cases-list.component';

const routes: Routes = [
  {path: 'overview', component: GeneralOverviewComponent},
  {path: '', component: MyCasesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
