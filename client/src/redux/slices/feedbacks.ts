import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IChangeFeedbackStatusData, IFeedback, IFeedbackData, IFeedbackState,
} from '../../types/feedbacksTypes';

const initialState: IFeedbackState = {
  data: [],
  isLoading: false,
  error: null,
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    getAllFeedbacksPending: (state: IFeedbackState) => {
      state.isLoading = true;
    },
    getAllFeedbacksFulfilled: (state:IFeedbackState, action:PayloadAction<IFeedback[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllFeedbacksRejected: (state: IFeedbackState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    addNewFeedbackPending: (state: IFeedbackState, action: PayloadAction<IFeedbackData>) => {
      state.isLoading = true;
    },
    addNewFeedbackFulfilled: (state:IFeedbackState, action:PayloadAction<IFeedback>) => {
      state.data.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    addNewFeedbackRejected: (state: IFeedbackState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    changeFeedbackStatusPending: (state: IFeedbackState, action: PayloadAction<IFeedback>) => {
      state.isLoading = true;
    },
    changeFeedbackStatusFulfilled: (state:IFeedbackState, action:PayloadAction<IChangeFeedbackStatusData>) => {
      state.data = state.data.map((feedback) => {
        if (feedback.id !== action.payload.id) return feedback;

        return { ...feedback, status: action.payload.status };
      });
      state.isLoading = false;
      state.error = null;
    },
    changeFeedbackStatusRejected: (state: IFeedbackState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export const { actions: feedbacksActions } = feedbacksSlice;
export default feedbacksSlice.reducer;
