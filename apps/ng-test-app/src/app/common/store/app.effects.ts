import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { mergeMap, switchMap, catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppActions from "./app.actions";
import { AppService } from '../services/app.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Injectable()
export class UpdateUserEffect {
    constructor(private actions: Actions, private appService:AppService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: Object) { }

    readonly UPDATE_USER_EFFECT_KEY = makeStateKey('UpdateUserEffect');

    @Effect()
    getPlannerVersion = this.actions
        .pipe(
            ofType(AppActions.UpdateUserAction),
            mergeMap((getPlannerVersionAction) => {
                const updateUserState = this.transferState.get(this.UPDATE_USER_EFFECT_KEY, null);
                if(updateUserState) {
                    return of(updateUserState)
                        .pipe(
                            tap(() => {
                                if (isPlatformBrowser(this.platformId)) {
                                    this.transferState.remove(this.UPDATE_USER_EFFECT_KEY);
                                }
                            }),
                            switchMap((posts) => {
                                return of(AppActions.UpdateUserSuccess({ user: posts[0].title }));
                            })
                        )
                }
                return this.appService.getPost()
                    .pipe(
                        tap((posts) => {
                            if (isPlatformServer(this.platformId)) { 
                                this.transferState.set(this.UPDATE_USER_EFFECT_KEY, posts);
                            }
                        }),
                        switchMap((posts) => {
                            return of(AppActions.UpdateUserSuccess({ user: posts[0].title }));
                        })
                    )
            }
            )
        );
}


export const AppEffects = [
    UpdateUserEffect
];