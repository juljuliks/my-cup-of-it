import { all } from 'redux-saga/effects';
import userSaga from './user';
import allUsersSaga from './allUsers';
import allCompaniesSaga from './companies';
import allTechnologiesSaga from './technologies';
import adminSaga from './admin';
import allFeedbacksSaga from './feedbacks';

export default function* rootSaga() {
  yield all([
    userSaga(),
    allUsersSaga(),
    allCompaniesSaga(),
    allTechnologiesSaga(),
    adminSaga(),
    allFeedbacksSaga(),
  ]);
}
