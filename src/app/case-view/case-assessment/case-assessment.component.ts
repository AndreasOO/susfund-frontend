import {Component, inject, Signal, OnInit} from '@angular/core';
import {Router, ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {CasesFetcherService} from '../../cases-services/cases-fetcher.service';
import {CaseAssessmentUtil} from '../../cases-services/case-util/case-assessment-util';

@Component({
  selector: 'app-case-assessment',
  standalone: false,
  templateUrl: './case-assessment.component.html',
  styleUrl: './case-assessment.component.css'
})
export class CaseAssessmentComponent implements OnInit {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>

  caseId:string | undefined
  caseApplicationUtil:CaseAssessmentUtil | undefined

  constructor(public router:Router, private fetcher:CasesFetcherService) {

  }

  ngOnInit() {
    this.caseId = this.router.url.split("/")[this.router.url.split("/").indexOf("cases")+1];
    this.fetcher.getCaseAssessmentUtilByCaseId(this.caseId).subscribe(caseApplicationUtil => this.caseApplicationUtil = caseApplicationUtil!)
    console.log(this.caseApplicationUtil)
  }
}
