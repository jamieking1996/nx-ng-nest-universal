import { createAction, props } from '@ngrx/store';

export const UpdateUserAction: string = "[APP] Update User";
export const UpdateUserSuccessAction: string = "[APP] Update User Success";

export const GetBlogsAction:string = "[APP] Get Blogs";
export const GetBlogsSuccessAction:string = "[APP] Get Blogs Success";

export const UpdateUser = createAction(UpdateUserAction);
export const UpdateUserSuccess = createAction(UpdateUserSuccessAction, props<{ user: string }>());

export const GetBlogs = createAction(GetBlogsAction);
export const GetBlogsSuccess = createAction(GetBlogsSuccessAction, props<{ blogs: any[] }>());
