import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getData, patchData, postData } from '../tools';
import { actions } from '../slices';
import { IAddNewFeedbackAction, IChangeFeedbackStatusAction, IFeedback } from '../../types/feedbacksTypes';
import { IAddNewTechnologyAction, ITechnology } from '../../types/technologiesTypes';

function* getAllFeedbacks(): SagaIterator {
  try {
    const allFeedbacks = yield call(() => getData<IFeedback[]>('/api/feedbacks'));
    yield put(actions.getAllFeedbacksFulfilled(allFeedbacks));
  } catch (e) {
    yield put(actions.getAllFeedbacksRejected(e as string));
  }
}

function* addNewFeedback({ payload }: IAddNewFeedbackAction): SagaIterator {
  try {
    const newFeedback = yield call(() => postData<IFeedback>('/api/feedbacks', payload));
    yield put(actions.addNewTechnologyFulfilled(newFeedback));
  } catch (e) {
    yield put(actions.addNewTechnologyRejected(e as string));
  }
}

function* changeFeedbackStatus({ payload }: IChangeFeedbackStatusAction): SagaIterator {
  try {
    const result = yield call(() => patchData<IFeedback>('/api/feedbacks', payload));
    yield put(actions.changeFeedbackStatusFulfilled(payload));
  } catch (e) {
    yield put(actions.changeFeedbackStatusRejected(e as string));
  }
}

export default function* allFeedbacksSaga(): SagaIterator {
  yield takeEvery(actions.getAllFeedbacksPending, getAllFeedbacks);
  yield takeEvery(actions.addNewFeedbackPending, addNewFeedback);
  yield takeEvery(actions.changeFeedbackStatusPending, changeFeedbackStatus);
}
