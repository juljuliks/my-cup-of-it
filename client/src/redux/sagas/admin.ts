import {
  takeEvery, call, put, all,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actions } from '../slices';
import { getData, postData } from '../tools';
import { IAdminProfile, ILoginAdminAction } from '../../types/adminTypes';

function* loginAdmin({ payload }: ILoginAdminAction): SagaIterator {
  try {
    const loggedAdmin = yield call(() => postData<IAdminProfile>('/api/top-secret-route', payload));
    yield put(actions.loginAdminFulfilled(loggedAdmin as IAdminProfile));
  } catch (e) {
    yield put(actions.loginAdminRejected(e as string));
  }
}

function* logoutAdmin(): SagaIterator {
  try {
    yield call(() => getData<boolean>('/api/logout'));
    yield put(actions.logoutAdminFulfilled());
  } catch (e) {
    yield put(actions.logoutAdminRejected(e as string));
  }
}

function* loginInitialAdmin(): SagaIterator {
  try {
    const loggedUser = yield call(() => getData<IAdminProfile>('/api/top-secret-route'));
    yield put(actions.loginAdminFulfilled(loggedUser as IAdminProfile));
  } catch (e) {
    yield put(actions.loginAdminRejected(e as string));
  }
}

export default function* adminSaga() {
  yield takeEvery(`${actions.loginAdminPending}`, loginAdmin);
  yield takeEvery(`${actions.logoutAdminPending}`, logoutAdmin);
  yield takeEvery(`${actions.getInitialAdminPending}`, loginInitialAdmin);
}
