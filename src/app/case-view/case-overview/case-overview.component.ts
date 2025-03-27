import {Component, inject, Input, Signal} from '@angular/core';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {Router, ROUTER_OUTLET_DATA} from '@angular/router';


@Component({
  selector: 'app-case-overview',
  standalone: false,
  templateUrl: './case-overview.component.html',
  styleUrl: './case-overview.component.css'
})
export class CaseOverviewComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
  constructor(public router:Router) {

  }

  // @Input() caseDetails:CaseDetails|undefined;
}
