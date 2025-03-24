import {Organization} from './organization';
import {CaseManager} from './case-manager';
import {CaseStatus} from './case-status';
import {CaseDecisionType} from './case-decision-type';
import {CaseDecision} from './case-decision';

export interface CaseDetails {
  id:number,
  name:string,
  organization:Organization,
  caseManager:CaseManager,
  caseStatus:CaseStatus,
  caseDecisionType:CaseDecisionType,
  caseDecision:CaseDecision
}
