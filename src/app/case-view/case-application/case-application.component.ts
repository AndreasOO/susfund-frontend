import {Component, inject, Signal} from '@angular/core';
import {ROUTER_OUTLET_DATA} from '@angular/router';
import {CaseDetails} from '../../cases-services/case-entity/case-details';
import {ApplicationQuestion} from '../../cases-services/case-entity/application-question';
import {OnInit} from '@angular/core';
import {ApplicationSection} from '../../cases-services/case-entity/application-section';

@Component({
  selector: 'app-case-application',
  standalone: false,
  templateUrl: './case-application.component.html',
  styleUrl: './case-application.component.css'
})
export class CaseApplicationComponent implements OnInit {
  caseDetails = inject(ROUTER_OUTLET_DATA) as Signal<CaseDetails>
  public sections: Map<String, Map<ApplicationQuestion, String>> = new Map();

  ngOnInit() {
    this.caseDetails().caseApplication?.questionResults?.forEach(questionResult => {
      const currentSection = questionResult.applicationQuestion.applicationSection;
      const question = questionResult.applicationQuestion;
      const answer = questionResult.answer;

      if (!this.sections.has(currentSection.name)) {
        this.sections.set(currentSection.name, new Map<ApplicationQuestion, string>());
      }

      this.sections.get(currentSection.name)?.set(question, answer);
    })

  }
}

