import {Organization} from './organization';
import {CaseManager} from './case-manager';

export interface CaseDTO {
  id:number,
  name:string,
  organization:Organization
  caseManager:CaseManager
}
