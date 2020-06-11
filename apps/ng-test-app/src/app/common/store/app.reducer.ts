import { createReducer, on } from '@ngrx/store';
import { UpdateUserSuccess } from './app.actions';

const initialState = {
	user: null
}

const userFeatureReducer = on(UpdateUserSuccess, (state: any, { user }): any => {
    return Object.assign({}, state, { user: user });
});

const featureReducer = createReducer(
	initialState,
	userFeatureReducer
);

export function appReducer(state: any = initialState, action: any) {
    return featureReducer(state, action);
}