import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-budget',
  standalone: false,
  templateUrl: './case-budget.component.html',
  styleUrl: './case-budget.component.css'
})
export class CaseBudgetComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
}
