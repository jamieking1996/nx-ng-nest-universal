import { Route } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { BlogGuard } from './blog.guard';
import { AdaptComponent } from '../../components/adapt/adapt.component';

export const rootState: Route = {
    path: '',
    component: HomeComponent,
}

export const blogsState:Route = {
    path: 'blogs',
    component: BlogsComponent,
    canActivate: [BlogGuard]
}

export const adaptState:Route = {
    path: 'adapt',
    component: AdaptComponent
}


export const AppStates = [rootState, blogsState, adaptState];