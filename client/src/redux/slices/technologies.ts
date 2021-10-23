import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAddNewTechnologyData,
  IDeleteTechnologyData,
  ITechnologiesState,
  ITechnology,
} from '../../types/technologiesTypes';
import { ICompany } from '../../types/companiesTypes';

const initialState: ITechnologiesState = {
  data: [],
  isLoading: false,
  error: null,
};

const sortData = (data: ITechnology[]) => data.sort((a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
});

const technologiesSlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    getAllTechnologiesPending: (state: ITechnologiesState) => {
      state.isLoading = true;
      state.error = null;
    },
    getAllTechnologiesFulFilled: (state: ITechnologiesState, action: PayloadAction<ITechnology[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllTechnologiesRejected: (state: ITechnologiesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    addNewTechnologyPending: (state:ITechnologiesState, action: PayloadAction<IAddNewTechnologyData>) => {
      state.isLoading = true;
    },
    addNewTechnologyFulfilled: (state: ITechnologiesState, action:PayloadAction<ITechnology>) => {
      state.data.push(action.payload);
      state.data = sortData(state.data);
      state.isLoading = false;
      state.error = null;
    },
    addNewTechnologyRejected: (state: ITechnologiesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    editTechnologyPending: (state:ITechnologiesState, action: PayloadAction<ITechnology>) => {
      state.isLoading = true;
    },
    editTechnologyFulfilled: (state: ITechnologiesState, action:PayloadAction<ITechnology>) => {
      state.data = state.data.map((technology) => (
        technology.id === action.payload.id ? action.payload : technology
      ));
      state.data = sortData(state.data);
      state.isLoading = false;
      state.error = null;
    },
    editTechnologyRejected: (state: ITechnologiesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteTechnologyPending: (state:ITechnologiesState, action: PayloadAction<IDeleteTechnologyData>) => {
      state.isLoading = true;
    },
    deleteTechnologyFulfilled: (state: ITechnologiesState, action:PayloadAction<IDeleteTechnologyData>) => {
      state.data = state.data.filter((technology) => technology.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    },
    deleteTechnologyRejected: (state: ITechnologiesState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: allTechnologiesActions } = technologiesSlice;
export default technologiesSlice.reducer;
