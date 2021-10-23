import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  IAddNewTechnologyAction,
  IDeleteTechnologyAction,
  IEditTechnologyAction,
  ITechnology,
} from '../../types/technologiesTypes';
import {
  deleteData, editData, getData, postData,
} from '../tools';
import { actions } from '../slices/index';

function* getAllTechnologies(): SagaIterator {
  try {
    const allTechnologies = yield call(() => getData<ITechnology[]>('/api/technologies'));
    yield put(actions.getAllTechnologiesFulFilled(allTechnologies as ITechnology[]));
  } catch (e) {
    yield put(actions.getAllTechnologiesRejected(e as string));
  }
}

function* addNewTechnology({ payload }: IAddNewTechnologyAction): SagaIterator {
  try {
    const newTechnology = yield call(() => postData<ITechnology>('/api/technologies', payload));
    yield put(actions.addNewTechnologyFulfilled(newTechnology));
  } catch (e) {
    yield put(actions.addNewTechnologyRejected(e as string));
  }
}

function* editTechnology({ payload }: IEditTechnologyAction): SagaIterator {
  try {
    const technology = yield call(() => editData<ITechnology>('/api/technologies', payload));
    yield put(actions.editTechnologyFulfilled(technology));
  } catch (e) {
    yield put(actions.editTechnologyRejected(e as string));
  }
}

function* deleteTechnology({ payload }: IDeleteTechnologyAction): SagaIterator {
  try {
    yield call(() => deleteData('/api/technologies', payload.id));
    yield put(actions.deleteTechnologyFulfilled(payload));
  } catch (e) {
    yield put(actions.deleteTechnologyRejected(e as string));
  }
}

export default function* allTechnologiesSaga() {
  yield takeEvery(actions.getAllTechnologiesPending, getAllTechnologies);
  yield takeEvery(actions.addNewTechnologyPending, addNewTechnology);
  yield takeEvery(actions.editTechnologyPending, editTechnology);
  yield takeEvery(actions.deleteTechnologyPending, deleteTechnology);
}
