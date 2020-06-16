import { createReducer, on } from '@ngrx/store';
import { UpdateUserSuccess, GetBlogsSuccess } from './app.actions';

const initialState = {
	blogs: null
}

const blogsFeatureReducer = on(GetBlogsSuccess, (state: any, { blogs }): any => {
    return Object.assign({}, state, { blogs: blogs });
});

const featureReducer = createReducer(
	initialState,
	blogsFeatureReducer
);

export function appReducer(state: any = initialState, action: any) {
    return featureReducer(state, action);
}