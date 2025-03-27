import {Component, Input} from '@angular/core';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {Router} from '@angular/router';

@Component({
  selector: 'app-case-overview',
  standalone: false,
  templateUrl: './case-overview.component.html',
  styleUrl: './case-overview.component.css'
})
export class CaseOverviewComponent {

  constructor(public router:Router) {
  }
  @Input() caseDetails:CaseDetails|undefined;
}
