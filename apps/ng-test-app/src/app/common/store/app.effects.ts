import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppActions from "./app.actions";
import { AppService } from '../services/app.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';


@Injectable()
export class GetBlogsEffect {
    constructor(private actions: Actions, private appService:AppService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: Object) { }

    readonly GET_BLOGS_EFFECT_KEY = makeStateKey('GetBlogsEffect');

    @Effect()
    getPlannerVersion = this.actions
        .pipe(
            ofType(AppActions.GetBlogsAction),
            mergeMap(() => {
                const updateUserState = this.transferState.get(this.GET_BLOGS_EFFECT_KEY, null);
                if(updateUserState) {
                    return of(updateUserState)
                        .pipe(
                            tap(() => {
                                if (isPlatformBrowser(this.platformId)) {
                                    this.transferState.remove(this.GET_BLOGS_EFFECT_KEY);
                                }
                            }),
                            switchMap((posts) => {
                                return of(AppActions.GetBlogsSuccess({ blogs: posts }));
                            })
                        )
                }
                return this.appService.getPost()
                    .pipe(
                        tap((posts) => {
                            if (isPlatformServer(this.platformId)) { 
                                this.transferState.set(this.GET_BLOGS_EFFECT_KEY, posts);
                            }
                        }),
                        switchMap((posts) => {
                            return of(AppActions.GetBlogsSuccess({ blogs: posts }));
                        })
                    )
            }
            )
        );
}



export const AppEffects = [
    GetBlogsEffect
];