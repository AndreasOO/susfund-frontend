import { Input,Component } from '@angular/core';

@Component({
  selector: 'app-case-sidebar-menu',
  standalone: false,
  templateUrl: './case-sidebar-menu.component.html',
  styleUrl: './case-sidebar-menu.component.css'
})



export class CaseSidebarMenuComponent {
  @Input() caseId:string|undefined = '';

}
