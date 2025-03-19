import {Organization} from './organization';
import {CaseManager} from './case-manager';
import {CaseStatus} from './case-status';
import {CaseDecisionType} from './case-decision-type';

export interface CaseDTO {
  id:number,
  name:string,
  organization:Organization,
  caseManager:CaseManager,
  caseStatus:CaseStatus,
  caseDecisionType:CaseDecisionType
}
