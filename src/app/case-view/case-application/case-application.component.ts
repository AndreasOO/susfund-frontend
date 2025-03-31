import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {ApplicationQuestion} from '../../cases-services/case-entity/application-question';
import {OnInit} from '@angular/core';
import {QuestionResults} from '../../cases-services/case-entity/question-results';

@Component({
  selector: 'app-case-application',
  standalone: false,
  templateUrl: './case-application.component.html',
  styleUrl: './case-application.component.css'
})
export class CaseApplicationComponent implements OnInit {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>;
  public questions: QuestionResults[][] | undefined;

  ngOnInit() {

    this.questions = [...new Set(this.caseDetails()
      .caseApplication?.questionResults.map(result => result.applicationQuestion?.applicationSection))]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(section => {
        return (this.caseDetails().caseApplication?.questionResults ?? [])
          .filter(questionResult => questionResult.applicationQuestion?.applicationSection.id === section.id)
      });
  }
}
