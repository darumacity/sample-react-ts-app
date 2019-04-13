import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

export const userActions = {
    updateCount: actionCreator<{ count: number }>('UPDATE_COUNT'),
    updateCountAsync: actionCreator.async<{ count: number }, { count: number }>('UPDATE_COUNT_ASYNC'),
};

export interface UserState {
    count: number;
}

const initialState: UserState = {
    count: 0,
};

export default reducerWithInitialState(initialState)
    .case(userActions.updateCountAsync.done, (state, payload) => {
        return Object.assign({}, state, { count: payload.result.count });
    });
