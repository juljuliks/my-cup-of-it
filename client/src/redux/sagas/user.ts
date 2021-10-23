import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actions } from '../slices';
import {
  getData, postData, editData, patchData, editUser,
} from '../tools';
import {
  IRegisterUserAction, ILoginUserAction, IMyProfile, IEditUserProfileAction, IChangeMeetStatusAction, IEditProfileStatusAction, IEditProfileRoleAction, IChangeMeetStatusPayload,
  IEditUserSocialsAction, IEditUserSocialsPayload, IChangeMeetDateAction, IChangeMeetDatePayload,
} from '../../types/usersTypes';
import { IMeetBody, IWriteMeetingAction } from '../../types/meetingTypes';
import ISocial from '../../types/socialsTypes';

function* writeUserMeeting({ payload }: IWriteMeetingAction): SagaIterator {
  try {
    const newMeeting = yield call(() => postData<IMeetBody>('/api/meets', payload));
    yield put(actions.writeUserMeetingFulfilled(newMeeting));
  } catch (e) {
    yield put(actions.writeUserMeetingRejected(e as string));
  }
}

function* editUserProfile({ payload }: IEditUserProfileAction): SagaIterator {
  try {
    const updatedUser = yield call(() => editUser<IMyProfile>('/api/users', payload));
    yield put(actions.editUserProfileFullfilled(updatedUser));
  } catch (e) {
    yield put(actions.editUserProfileRejected(e as string));
  }
}

function* editUserMeets({ payload }: IChangeMeetStatusAction): SagaIterator {
  try {
    yield call(() => patchData<IChangeMeetStatusPayload>('/api/meets', payload));
    yield put(actions.changeUserMeetStatusFullfilled({ id: payload.id, status: payload.status }));
  } catch (e) {
    yield put(actions.changeUserMeetStatusRejected(e as string));
  }
}

function* toggleUserStatus({ payload }: IEditProfileStatusAction): SagaIterator {
  try {
    yield call(() => patchData<IMyProfile>('/api/users', payload));
    yield put(actions.toggleUserStatusFullfilled());
  } catch (e) {
    yield put(actions.toggleUserStatusRejected(e as string));
  }
}

function* toggleUserRole({ payload }: IEditProfileRoleAction): SagaIterator {
  try {
    yield call(() => patchData<IMyProfile>('/api/users', payload));
    yield put(actions.toggleUserRoleFullfilled());
  } catch (e) {
    yield put(actions.toggleUserRoleRejected(e as string));
  }
}

function* loginUser({ payload }: ILoginUserAction): SagaIterator {
  try {
    const loggedUser = yield call(() => postData<IMyProfile>('/api/login', payload));
    yield put(actions.loginUserFulfilled(loggedUser as IMyProfile));
  } catch (e) {
    yield put(actions.loginUserRejected(e as string));
  }
}

function* logoutUser(): SagaIterator {
  try {
    yield call(getData, '/api/logout');
    yield put(actions.logoutUserFullfilled());
  } catch (e) {
    yield put(actions.logoutUserRejected(e as string));
  }
}

function* registerUser({ payload }: IRegisterUserAction): SagaIterator {
  try {
    const newUser = yield call(() => postData<IMyProfile>('/api/register', payload));
    yield put(actions.loginUserFulfilled(newUser as IMyProfile));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e as string));
  }
}

function* loginInitialUser(): SagaIterator {
  try {
    const loggedUser = yield call(() => getData<IMyProfile>('/api/me'));
    yield put(actions.loginUserFulfilled(loggedUser as IMyProfile));
  } catch (e) {
    yield put(actions.loginUserRejected(e as string));
  }
}

function* editUserSocials({ payload }: IEditUserSocialsAction): SagaIterator {
  try {
    const allSocials = yield call(() => editData<IEditUserSocialsPayload>('/api/socials', payload));
    yield put(actions.changeUserSocialsFullfilled(allSocials as ISocial[]));
  } catch (e) {
    yield put(actions.changeUserSocialsRejected(e as string));
  }
}

function* addUserSocials({ payload }: IEditUserSocialsAction): SagaIterator {
  try {
    const allSocials = yield call(() => postData<IEditUserSocialsPayload>('/api/socials', payload));
    yield put(actions.addUserSocialsFullfilled(allSocials as ISocial[]));
  } catch (e) {
    yield put(actions.addUserSocialsRejected(e as string));
  }
}

function* editMeetDate({ payload }: IChangeMeetDateAction): SagaIterator {
  try {
    yield call(() => editData<IChangeMeetDatePayload>('/api/meets', payload));
    yield put(actions.changeMeetDateFullfilled(payload));
  } catch (e) {
    yield put(actions.changeMeetDateRejected(e as string));
  }
}

export default function* userSaga() {
  yield takeEvery(`${actions.writeUserMeetingPending}`, writeUserMeeting);
  yield takeEvery(`${actions.loginUserPending}`, loginUser);
  yield takeEvery(`${actions.logoutUserPending}`, logoutUser);
  yield takeEvery(`${actions.registerUserPending}`, registerUser);
  yield takeEvery(`${actions.getInitialUserPending}`, loginInitialUser);
  yield takeEvery(`${actions.editUserProfilePending}`, editUserProfile);
  yield takeEvery(`${actions.toggleUserRolePending}`, toggleUserRole);
  yield takeEvery(`${actions.toggleUserStatusPending}`, toggleUserStatus);
  yield takeEvery(`${actions.changeUserMeetStatusPending}`, editUserMeets);

  yield takeEvery(`${actions.addUserSocialsPending}`, addUserSocials);
  yield takeEvery(`${actions.changeUserSocialsPending}`, editUserSocials);

  yield takeEvery(`${actions.changeMeetDatePending}`, editMeetDate);
}
