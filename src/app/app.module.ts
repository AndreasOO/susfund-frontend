import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopHeaderModule} from './top-header/top-header.module';
import {FooterModule} from './footer/footer.module';
import {CaseViewModule} from './case-view/case-view.module';
import {CasesListModule} from './cases-list/cases-list.module';
import {CasesServicesModule} from './cases-services/cases-services.module';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopHeaderModule,
    FooterModule,
    CaseViewModule,
    CasesListModule,
    CasesServicesModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
