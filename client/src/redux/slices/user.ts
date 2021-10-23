import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rawListeners } from 'process';
import {
  IMeet, IMyProfile, IMyProfileState, IChangeMeetStatusPayload,
  IEditProfileRolePayload, IEditProfileStatusPayload, IEditUserSocialsPayload, IChangeMeetDatePayload,
} from '../../types/usersTypes';
import ISocial from '../../types/socialsTypes';

const initialState: IMyProfileState = {
  profile: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    description: '',
    isMentor: false,
    isActive: false,
    careerStart: '',
    company: '',
    position: '',
    userPhoto: '',
    technologies: [],
    meets: [],
    socials: [],
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    writeUserMeetingPending: (state: IMyProfileState, action) => {
      state.isLoading = true;
      state.error = null;
    },

    writeUserMeetingFulfilled: (state: IMyProfileState, action: PayloadAction<IMeet>) => {
      state.profile.meets.push(action.payload);
      state.error = null;
      state.isLoading = false;
    },

    writeUserMeetingRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loginUserPending: (state: IMyProfileState, action) => {
      state.isLoading = true;
      state.error = null;
    },
    loginUserFulfilled: (state: IMyProfileState, action: PayloadAction<IMyProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginUserRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutUserPending: (state: IMyProfileState) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutUserFullfilled: (state: IMyProfileState) => {
      state.profile = initialState.profile;
      state.error = null;
      state.isLoading = false;
    },
    logoutUserRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    registerUserPending: (state: IMyProfileState, action: PayloadAction<FormData>) => {
      state.isLoading = true;
      state.error = null;
    },

    getInitialUserPending: (state: IMyProfileState) => {
      state.isLoading = true;
      state.error = null;
    },

    editUserProfilePending: (state: IMyProfileState, action: PayloadAction<{ formData: FormData, userId: string }>) => {
      state.isLoading = true;
      state.error = null;
    },
    editUserProfileFullfilled: (state: IMyProfileState, action: PayloadAction<IMyProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    editUserProfileRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    toggleUserRolePending: (state: IMyProfileState, action: PayloadAction<IEditProfileRolePayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    toggleUserRoleFullfilled: (state: IMyProfileState) => {
      state.profile.isMentor = !state.profile.isMentor;
      state.error = null;
      state.isLoading = false;
    },
    toggleUserRoleRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    toggleUserStatusPending: (state: IMyProfileState, action: PayloadAction<IEditProfileStatusPayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    toggleUserStatusFullfilled: (state: IMyProfileState) => {
      state.profile.isActive = !state.profile.isActive;
      state.error = null;
      state.isLoading = false;
    },
    toggleUserStatusRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    changeUserMeetStatusPending: (state: IMyProfileState, action: PayloadAction<IChangeMeetStatusPayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    changeUserMeetStatusFullfilled: (state: IMyProfileState, action: PayloadAction<IChangeMeetStatusPayload>) => {
      state.profile.meets = state.profile.meets.map((meet) => {
        if (meet.id === action.payload.id) {
          meet.status = action.payload.status;
          return meet;
        }
        return meet;
      });
      state.error = null;
      state.isLoading = false;
    },
    changeUserMeetStatusRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    addUserSocialsPending: (state: IMyProfileState, action: PayloadAction<IEditUserSocialsPayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    addUserSocialsFullfilled: (state: IMyProfileState, action: PayloadAction<ISocial[]>) => {
      state.profile.socials = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    addUserSocialsRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    changeUserSocialsPending: (state: IMyProfileState, action: PayloadAction<IEditUserSocialsPayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    changeUserSocialsFullfilled: (state: IMyProfileState, action: PayloadAction<ISocial[]>) => {
      state.profile.socials = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    changeUserSocialsRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    changeMeetDatePending: (state: IMyProfileState, action: PayloadAction<IChangeMeetDatePayload>) => {
      state.isLoading = true;
      state.error = null;
    },
    changeMeetDateFullfilled: (state: IMyProfileState, action: PayloadAction<IChangeMeetDatePayload>) => {
      state.profile.meets = state.profile.meets.map((meet) => {
        if (meet.id === action.payload.id) {
          meet.date = (action.payload.date) ? action.payload.date : meet.date;
          meet.comment = (action.payload.comment) ? action.payload.comment : meet.comment;
          return meet;
        }
        return meet;
      });
      state.error = null;
      state.isLoading = false;
    },
    changeMeetDateRejected: (state: IMyProfileState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

  },
});

export default userSlice.reducer;
export const { actions: userActions } = userSlice;
