export interface IAddNewCompanyData {
  title: string,
}

export interface IDeleteCompanyData {
  id: string,
}

export interface ICompany extends IAddNewCompanyData{
  id: string,
}

export interface ICompaniesState {
  data: ICompany[];
  isLoading: boolean;
  error: string | null;
}

export interface IAddNewCompanyAction {
  type: string,
  payload: IAddNewCompanyData,
}

export interface IEditCompanyAction {
  type: string,
  payload: ICompany,
}

export interface IDeleteCompanyAction {
  type: string,
  payload: IDeleteCompanyData,
}
