import { ICompany } from '../../../../../../../../types/companiesTypes';
import { ITechnology } from '../../../../../../../../types/technologiesTypes';

export interface IEditButtonProp {
  technology: ITechnology,
}

export interface IEditTechnologyData {
  category: string,
  title: string,
}

export type HandleSubmitEditCompanyFormType = (values: IEditTechnologyData) => void
