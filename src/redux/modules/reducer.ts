import { combineReducers } from 'redux';

import user, { UserState } from './user';

export type AppState = {
    user: UserState,
};

export default combineReducers<AppState>({
    user,
});
