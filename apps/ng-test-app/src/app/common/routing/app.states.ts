import { Route } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';

export const rootState: Route = {
    path: '',
    component: HomeComponent,
}

export const blogsState:Route = {
    path: 'blogs',
    component: BlogsComponent
}


export const AppStates = [rootState, blogsState];