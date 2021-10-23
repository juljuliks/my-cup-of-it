import { ICompany } from '../../../../../../../../types/companiesTypes';

export interface IEditButtonProp {
  company: ICompany,
}

export interface IEditCompanyData {
  title: string,
}

export type HandleSubmitEditCompanyFormType = (values: IEditCompanyData) => void
