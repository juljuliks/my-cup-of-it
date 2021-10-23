import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAllUsersState, IProfile } from '../../types/usersTypes';

const initialState: IAllUsersState = {
  data: [],
  isLoading: false,
  error: null,
};

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    getAllUsersPending: (state: IAllUsersState) => {
      state.isLoading = true;
    },
    getAllUsersFulfilled: (state:IAllUsersState, action:PayloadAction<IProfile[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllUsersRejected: (state: IAllUsersState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: allUserActions } = allUsersSlice;
export default allUsersSlice.reducer;
