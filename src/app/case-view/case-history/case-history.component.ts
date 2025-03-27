import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-history',
  standalone: false,
  templateUrl: './case-history.component.html',
  styleUrl: './case-history.component.css'
})
export class CaseHistoryComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
}
