import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-case-main-view',
  standalone: false,
  templateUrl: './case-main-view.component.html',
  styleUrl: './case-main-view.component.css'
})
export class CaseMainViewComponent implements OnInit {
  caseId:string | undefined

  constructor(private router:Router) {

    }

    ngOnInit() {
      this.caseId = this.router.url.split("/").pop();
    }

}
