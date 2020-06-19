import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
    this.blogs = this.store.select(blogsSelector);
  }

}
