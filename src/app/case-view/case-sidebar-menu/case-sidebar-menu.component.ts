import {Input, Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';

@Component({
  selector: 'app-case-sidebar-menu',
  standalone: false,
  templateUrl: './case-sidebar-menu.component.html',
  styleUrl: './case-sidebar-menu.component.css'
})



export class CaseSidebarMenuComponent {
  @Input() caseDetails:CaseDetails|undefined;

}
