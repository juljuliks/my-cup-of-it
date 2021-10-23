import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  deleteData, editData, getData, postData,
} from '../tools';
import { actions } from '../slices';
import {
  IAddNewCompanyAction, ICompany, IDeleteCompanyAction, IEditCompanyAction,
} from '../../types/companiesTypes';

function* getAllCompanies(): SagaIterator {
  try {
    const allCompanies = yield call(() => getData<ICompany[]>('/api/companies'));
    yield put(actions.getAllCompaniesFulfilled(allCompanies));
  } catch (e) {
    yield put(actions.getAllCompaniesRejected(e as string));
  }
}

function* addNewCompany({ payload }: IAddNewCompanyAction): SagaIterator {
  try {
    const newCompany = yield call(() => postData<ICompany>('/api/companies', payload));
    yield put(actions.addNewCompanyFulfilled(newCompany));
  } catch (e) {
    yield put(actions.addNewCompanyRejected(e as string));
  }
}

function* editCompany({ payload }: IEditCompanyAction): SagaIterator {
  try {
    const company = yield call(() => editData<ICompany>('/api/companies', payload));
    yield put(actions.editCompanyFulfilled(company));
  } catch (e) {
    yield put(actions.editCompanyRejected(e as string));
  }
}

function* deleteCompany({ payload }: IDeleteCompanyAction): SagaIterator {
  try {
    yield call(() => deleteData('/api/companies', payload.id));
    yield put(actions.deleteCompanyFulfilled(payload));
  } catch (e) {
    yield put(actions.deleteCompanyRejected(e as string));
  }
}

export default function* allCompaniesSaga(): SagaIterator {
  yield takeEvery(actions.getAllCompaniesPending, getAllCompanies);
  yield takeEvery(actions.addNewCompanyPending, addNewCompany);
  yield takeEvery(actions.editCompanyPending, editCompany);
  yield takeEvery(actions.deleteCompanyPending, deleteCompany);
}
