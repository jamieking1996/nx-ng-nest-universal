import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppStates } from './common/routing/app.states';
import { BlogsComponent } from './components/blogs/blogs.component';
import { appReducer } from './common/store/app.reducer';
import { AppEffects } from './common/store/app.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, BlogsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule.forRoot([...AppStates]),
    StoreModule.forRoot({ APP: appReducer }),
    EffectsModule.forRoot([...AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
