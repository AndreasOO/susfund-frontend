import {Component, inject, Input, Signal, OnInit} from '@angular/core';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {Router, ROUTER_OUTLET_DATA} from '@angular/router';
import {CasesFetcherService} from '../../cases-services/cases-fetcher.service';
import {CaseManager} from '../../cases-services/case-entity/case-manager';


@Component({
  selector: 'app-case-overview',
  standalone: false,
  templateUrl: './case-overview.component.html',
  styleUrl: './case-overview.component.css'
})
export class CaseOverviewComponent implements OnInit{

  caseId:string | undefined
  currentCaseManager:CaseManager | undefined
  caseManagerList:CaseManager[] | undefined
  caseDetails:CaseDetails | undefined

  constructor(public router:Router, private fetcher:CasesFetcherService) {

  }

  ngOnInit() {
    this.caseId = this.router.url.split("/")[this.router.url.split("/").indexOf("cases")+1];
    this.fetcher.getCaseById(this.caseId).subscribe(caseDetails => this.caseDetails = caseDetails!)
    this.fetcher.getCaseManagerByCaseId(this.caseId).subscribe(caseManager => this.currentCaseManager = caseManager!)
    this.fetcher.getAllCaseManagers().subscribe(caseManagerList => this.caseManagerList = caseManagerList!)
  }
}
