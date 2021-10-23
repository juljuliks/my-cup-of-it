import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAddNewCompanyData, ICompaniesState, ICompany, IDeleteCompanyData,
} from '../../types/companiesTypes';
import { IEditCompanyData } from '../../modules/AdminProfile/components/CompanyManager/components/CompanyList/components/EditButton/types';

const initialState: ICompaniesState = {
  data: [],
  isLoading: false,
  error: null,
};

const sortData = (data: ICompany[]) => data.sort((a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
});

const companiesSlice = createSlice({
  name: 'allCompanies',
  initialState,
  reducers: {
    getAllCompaniesPending: (state:ICompaniesState) => {
      state.isLoading = true;
    },
    getAllCompaniesFulfilled: (state: ICompaniesState, action:PayloadAction<ICompany[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllCompaniesRejected: (state: ICompaniesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    addNewCompanyPending: (state:ICompaniesState, action: PayloadAction<IAddNewCompanyData>) => {
      state.isLoading = true;
    },
    addNewCompanyFulfilled: (state: ICompaniesState, action:PayloadAction<ICompany>) => {
      state.data.push(action.payload);
      state.data = sortData(state.data);
      state.isLoading = false;
      state.error = null;
    },
    addNewCompanyRejected: (state: ICompaniesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    editCompanyPending: (state:ICompaniesState, action: PayloadAction<ICompany>) => {
      state.isLoading = true;
    },
    editCompanyFulfilled: (state: ICompaniesState, action:PayloadAction<ICompany>) => {
      state.data = state.data.map((company) => (
        company.id === action.payload.id ? action.payload : company
      ));
      state.data = sortData(state.data);
      state.isLoading = false;
      state.error = null;
    },
    editCompanyRejected: (state: ICompaniesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteCompanyPending: (state:ICompaniesState, action: PayloadAction<IDeleteCompanyData>) => {
      state.isLoading = true;
    },
    deleteCompanyFulfilled: (state: ICompaniesState, action:PayloadAction<IDeleteCompanyData>) => {
      state.data = state.data.filter((company) => company.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    },
    deleteCompanyRejected: (state: ICompaniesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: companiesActions } = companiesSlice;
export default companiesSlice.reducer;
