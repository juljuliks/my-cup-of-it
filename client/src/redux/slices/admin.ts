import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdminProfile, IAdminState } from '../../types/adminTypes';

const initialState: IAdminState = {
  profile: {
    id: '',
    admin: '',
    adminPhoto: '',
    isAdmin: false,
  },
  isLoading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAdminPending: (state: IAdminState, action) => {
      state.isLoading = true;
      state.error = null;
    },
    loginAdminFulfilled: (state: IAdminState, action: PayloadAction<IAdminProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginAdminRejected: (state: IAdminState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutAdminPending: (state: IAdminState) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutAdminFulfilled: (state: IAdminState) => {
      state.profile = initialState.profile;
      state.error = null;
      state.isLoading = false;
    },
    logoutAdminRejected: (state: IAdminState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    getInitialAdminPending: (state: IAdminState) => {
      state.isLoading = true;
      state.error = null;
    },
  },
});

export const { actions: adminActions } = adminSlice;
export default adminSlice.reducer;
