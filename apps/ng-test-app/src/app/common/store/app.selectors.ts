import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appStateSelector = createFeatureSelector<any>('APP');
export const userSelector = createSelector(appStateSelector, (state: any) => state.user);
