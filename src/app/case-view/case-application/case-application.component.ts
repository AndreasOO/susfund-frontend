import {Component, inject, Signal} from '@angular/core';
import {Router, ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {ApplicationQuestion} from '../../cases-services/case-entity/application-question';
import {OnInit} from '@angular/core';
import {ApplicationSection} from '../../cases-services/case-entity/application-section';
import {QuestionResults} from '../../cases-services/case-entity/question-results';
import {CasesFetcherService} from '../../cases-services/cases-fetcher.service';
import {CaseApplicationUtil} from '../../cases-services/case-util/case-application-util';
import {ApplicationUpdateRequest} from '../../cases-services/case-util/application-update-request';

@Component({
  selector: 'app-case-application',
  standalone: false,
  templateUrl: './case-application.component.html',
  styleUrl: './case-application.component.css'
})
export class CaseApplicationComponent implements OnInit {

  public caseId:string | undefined;
  public caseApplicationUtil: CaseApplicationUtil | undefined;

  constructor(public router:Router, public fetcher:CasesFetcherService) {
  }

  ngOnInit() {

    this.caseId = this.router.url.split("/")[this.router.url.split("/").indexOf("cases")+1];
    this.fetcher.getApplicationUtilByCaseId(this.caseId).subscribe(caseApplicationUtil => this.caseApplicationUtil = caseApplicationUtil)

  }

  public saveUpdate(input:string, questionId:number){
    const request: ApplicationUpdateRequest ={
      questionId: questionId,
      answer: input
    }
    const response = this.fetcher.updateApplicationQuestion(this.caseId!, request).subscribe(response =>{
      console.log(response)
    },
      error => console.log(error)
    );
  }
}

