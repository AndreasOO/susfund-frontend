import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map,Observable} from 'rxjs';
import {CaseDTO} from './case-entity/case-dto';
import {CaseLazy} from './case-entity/case-lazy';
import {CaseDetails} from './case-entity/case-details';
import {Organization} from './case-entity/organization';
import {CaseManager} from './case-entity/case-manager';
import {CaseStatus} from './case-entity/case-status';
import {CaseDecisionType} from './case-entity/case-decision-type';
import {CaseBudget} from './case-entity/case-budget';
import {CaseAssessmentUtil} from './case-util/case-assessment-util';
import {CaseApplicationUtil} from './case-util/case-application-util';

@Injectable({
  providedIn: 'root'
})
export class CasesFetcherService {

  constructor(private http:HttpClient) {
  }

  public getAllCases():Observable<CaseLazy[]> {
    return this.http.get<CaseDTO[]>("http://localhost:8080/SusFund-1.0-SNAPSHOT/api/cases")
                    .pipe(map(casesDTOs => casesDTOs.map(caseDTO => {
                      return {
                        id: caseDTO.id,
                        name:caseDTO.name,
                        companyName:caseDTO.organization.name,
                        companyId:caseDTO.organization.id,
                        caseManager:caseDTO.caseManager.name,
                        controller:caseDTO.caseManager.name,
                        caseStatus:caseDTO.caseStatus.name,
                        caseDecisionType:caseDTO.caseDecisionType.name
                      }
    })))
  }

  public getCaseById(id:string | undefined):Observable<CaseDetails> {
    return this.http.get<CaseDTO>("http://localhost:8080/SusFund-1.0-SNAPSHOT/api/cases/" + id)
                    .pipe(map(caseDTO => {
                      return {
                        id:caseDTO.id,
                        name:caseDTO.name,
                        organization:caseDTO.organization,
                        caseManager:caseDTO.caseManager,
                        caseStatus:caseDTO.caseStatus,
                        caseDecisionType:caseDTO.caseDecisionType,
                        caseDecision:caseDTO.caseDecision,
                        caseApplication:caseDTO.caseApplication,
                        caseAssessment:caseDTO.caseAssessment,
                        caseBudget:caseDTO.caseBudget,
                        historyEventList:caseDTO.historyEventList
                      }
    }))
  }

  public getCaseAssessmentUtilByCaseId(id:string | undefined):Observable<CaseAssessmentUtil> {
    return this.http.get<CaseAssessmentUtil>("http://localhost:8080/SusFund-1.0-SNAPSHOT/api/cases/" + id + "/assessment");
  }

  public getApplicationUtilByCaseId(id:string | undefined):Observable<CaseApplicationUtil> {
    return this.http.get<CaseApplicationUtil>("http://localhost:8080/SusFund-1.0-SNAPSHOT/api/cases/" + id + "/application");

  }
  public getBudgetByCaseId(id:string | undefined):Observable<CaseBudget>{
    return this.http.get<CaseBudget>("http://localhost:8080/SusFund-1.0-SNAPSHOT/api/cases/" + id + "/budget");
  }
}
