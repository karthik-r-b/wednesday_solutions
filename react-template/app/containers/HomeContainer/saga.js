import { put, call, takeLatest } from 'redux-saga/effects';
import { getPlaylist } from '@app/services/repoApi';
import { homeContainerTypes, homeContainerCreators } from './reducer';

const { REQUEST_GET_ITUNE } = homeContainerTypes;
const { successGetItune, failureGetItune } = homeContainerCreators;
export function* getItuneName(action) {
  const response = yield call(getPlaylist, action.ituneName);
  const { data, ok } = response;
  // eslint-disable-next-line no-console
  console.log(data);

  if (ok) {
    yield put(successGetItune(data));
  } else {
    yield put(failureGetItune(data));
  }
}
// Individual exports for testing
export default function* homeContainerSaga() {
  yield takeLatest(REQUEST_GET_ITUNE, getItuneName);
}
