import {Component, Input} from '@angular/core';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-overview',
  standalone: false,
  templateUrl: './case-overview.component.html',
  styleUrl: './case-overview.component.css'
})
export class CaseOverviewComponent {
  @Input() caseDetails:CaseDetails|undefined;
}
