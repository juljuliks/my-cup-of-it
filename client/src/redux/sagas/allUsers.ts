import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getData } from '../tools';
import { actions } from '../slices';
import { IProfile } from '../../types/usersTypes';

function* getAllUsers(): SagaIterator {
  try {
    const allUsers = yield call(() => getData<IProfile[]>('/api/users'));
    yield put(actions.getAllUsersFulfilled(allUsers));
  } catch (e) {
    yield put(actions.getAllUsersRejected(e as string));
  }
}

export default function* allUsersSaga(): SagaIterator {
  yield takeEvery(actions.getAllUsersPending, getAllUsers);
}
