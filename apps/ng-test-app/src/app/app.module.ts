import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppStates } from './common/routing/app.states';
import { BlogsComponent } from './components/blogs/blogs.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BlogsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([...AppStates])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
