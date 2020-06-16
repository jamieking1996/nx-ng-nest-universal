import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { blogsSelector } from '../store/app.selectors';
import { tap, takeUntil, switchMap, skipWhile, finalize } from 'rxjs/operators';
import { GetBlogs } from '../store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class BlogGuard implements CanActivate, CanActivateChild {

  private unsubscriber:Subject<boolean>;

  constructor(private router: Router, private store:Store) { 
    this.unsubscriber = new Subject<boolean>();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardian();
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardian();
  }

  private guardian():Observable<boolean> {
    return this.selectBlogs().pipe(
      takeUntil(this.unsubscriber),
      skipWhile(blogs => !blogs),
      switchMap(() => {
        return of(true);
      }),
      finalize(() => this.unsubcribe())
    )
  }

  private unsubcribe() {
    this.unsubscriber.next(false);
    this.unsubscriber.complete();
  }

  private selectBlogs():Observable<any> {
    return this.store.select(blogsSelector).pipe(
      tap((blogs) => {
        if(!blogs) {
          this.store.dispatch(GetBlogs());
        }
      })
    )
  }
  
}
