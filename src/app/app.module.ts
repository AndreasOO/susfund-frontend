import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopHeaderModule} from './top-header/top-header.module';
import {FooterModule} from './footer/footer.module';
import {CaseOverviewModule} from './case-overview/case-overview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopHeaderModule,
    FooterModule,
    CaseOverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
