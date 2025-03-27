import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-documents',
  standalone: false,
  templateUrl: './case-documents.component.html',
  styleUrl: './case-documents.component.css'
})
export class CaseDocumentsComponent {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
}
