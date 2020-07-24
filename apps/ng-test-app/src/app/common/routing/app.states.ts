import { Route } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { BlogGuard } from './blog.guard';
import { AdaptComponent } from '../../components/adapt/adapt.component';
import { AdaptOldComponent } from '../../components/adapt-old/adapt-old.component';

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

export const adaptOldState:Route = {
    path: 'adapt-old',
    component: AdaptOldComponent
}


export const AppStates = [rootState, blogsState, adaptState, adaptOldState];