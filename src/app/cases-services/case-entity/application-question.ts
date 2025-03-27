import {ApplicationSection} from './application-section';

export interface ApplicationQuestion {
  id:number,
  title:string,
  preamble:string,
  assisting_text:string,
  applicationSection:ApplicationSection
}
