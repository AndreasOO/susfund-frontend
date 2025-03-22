import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-general-overview',
  standalone: false,
  templateUrl: './case-overview.component.html',
  styleUrl: './case-overview.component.css'
})
export class CaseOverviewComponent {
  @Input() caseId:string|undefined = '';
}
