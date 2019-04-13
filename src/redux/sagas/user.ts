import { SagaIterator } from 'redux-saga';
import { fork, takeEvery, call } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { userActions } from '../modules/user';

function* updateCountSaga(action: any) {
    yield call(bindAsyncAction(userActions.updateCountAsync)(
        function* (params): SagaIterator {
            return { count: params.count };
        },
    ), action.payload);
}

export default [
    fork(function* () { yield takeEvery(userActions.updateCount, updateCountSaga) }),
]
