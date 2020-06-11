import { createAction, props } from '@ngrx/store';

export const UpdateUserAction: string = "[APP] Update User";
export const UpdateUserSuccessAction: string = "[APP] Update User Success";

export const UpdateUser = createAction(UpdateUserAction);
export const UpdateUserSuccess = createAction(UpdateUserSuccessAction, props<{ user: string }>());
