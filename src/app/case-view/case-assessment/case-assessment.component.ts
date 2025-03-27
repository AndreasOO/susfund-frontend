import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-assessment',
  standalone: false,
  templateUrl: './case-assessment.component.html',
  styleUrl: './case-assessment.component.css'
})
export class CaseAssessmentComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
}
