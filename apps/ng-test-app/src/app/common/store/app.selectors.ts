import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appStateSelector = createFeatureSelector<any>('APP');
export const blogsSelector = createSelector(appStateSelector, (state: any) => state.blogs);
