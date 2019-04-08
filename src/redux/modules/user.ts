import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

export const userActions = {
    updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
    updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL')
};

export interface UserState {
    name: string;
    email: string;
}

const initialState: UserState = {
    name: '',
    email: ''
};

export default reducerWithInitialState(initialState)
    .case(userActions.updateName, (state, name) => {
        return Object.assign({}, state, { name });
    })
    .case(userActions.updateEmail, (state, email) => {
        return Object.assign({}, state, { email });
    });
