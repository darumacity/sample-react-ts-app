import { createStore as _createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/reducer';
import rootSaga from './sagas';

export default function createStore() {

    const sagaMiddleware = createSagaMiddleware();

    const store = _createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga)

    return store;
}
