import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map,Observable} from 'rxjs';
import {CaseDTO} from './case-entity/case-dto';
import {CaseLazy} from './case-entity/case-lazy';

@Injectable({
  providedIn: 'root'
})
export class CasesFetcherService {

  constructor(private http:HttpClient) {
  }

  getAllCases():Observable<CaseLazy[]> {
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

}
