import {Organization} from './organization';
import {CaseManager} from './case-manager';
import {CaseStatus} from './case-status';
import {CaseDecisionType} from './case-decision-type';
import {CaseDecision} from './case-decision';
import {CaseAssessment} from './case-assessment';
import {CaseApplication} from './case-application';

export interface CaseDTO {
  id:number,
  name:string,
  organization:Organization,
  caseManager:CaseManager,
  caseStatus:CaseStatus,
  caseDecisionType:CaseDecisionType,
  caseDecision:CaseDecision
  caseAssessment:CaseAssessment
  caseApplication:CaseApplication
}
