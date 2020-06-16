import { Route } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { BlogGuard } from './blog.guard';

export const rootState: Route = {
    path: '',
    component: HomeComponent,
}

export const blogsState:Route = {
    path: 'blogs',
    component: BlogsComponent,
    canActivate: [BlogGuard]
}


export const AppStates = [rootState, blogsState];