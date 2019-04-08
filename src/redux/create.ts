import { createStore as _createStore } from 'redux';

import reducer from './modules/reducer';

export default function createStore() {
    return _createStore(reducer);
}
