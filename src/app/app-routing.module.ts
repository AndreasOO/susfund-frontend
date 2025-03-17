import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneralOverviewComponent} from './case-overview/general-overview/general-overview.component';

const routes: Routes = [
  {path: 'overview', component: GeneralOverviewComponent},
  {path: '', component: GeneralOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
