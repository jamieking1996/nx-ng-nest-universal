import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetBlogs } from '../../common/store/app.actions';
import { blogsSelector } from '../../common/store/app.selectors';

@Component({
  selector: 'nx-ng-nest-universal-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public blogs;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(GetBlogs());
    this.blogs = this.store.select(blogsSelector);
  }

}
