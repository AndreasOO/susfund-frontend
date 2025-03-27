import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-organization-details',
  standalone: false,
  templateUrl: './case-organization-details.component.html',
  styleUrl: './case-organization-details.component.css'
})
export class CaseOrganizationDetailsComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
}
