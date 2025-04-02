import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {CasesFetcherService} from '../../cases-services/cases-fetcher.service';
import {CaseDTO} from '../../cases-services/case-entity/case-dto';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {ROUTER_OUTLET_DATA} from '@angular/router';

@Component({
  selector: 'app-case-main-view',
  standalone: false,
  templateUrl: './case-main-view.component.html',
  styleUrl: './case-main-view.component.css'
})
export class CaseMainViewComponent implements OnInit {
  caseId:string | undefined
  caseDetails:CaseDetails | undefined

  constructor(public router:Router, private fetcher:CasesFetcherService) {

    }

    ngOnInit() {
      this.caseId = this.router.url.split("/")[this.router.url.split("/").indexOf("cases")+1];
      this.fetcher.getCaseById(this.caseId).subscribe(caseDetails => this.caseDetails = caseDetails!,


                                                                                err => { if  (err.status === 0) {
                                                                                  console.log(err.status);
                                                                                  this.router.navigateByUrl("/login")
                                                                                }
                                                                                },
                                                                                () => console.log("finished"))
      console.log(this.caseDetails)
    }

}
