import {Component, inject, OnInit, Signal} from '@angular/core';
import {Router, ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-decision',
  standalone: false,
  templateUrl: './case-decision.component.html',
  styleUrl: './case-decision.component.css'
})
export class CaseDecisionComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
}
