import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { blogsSelector } from '../../common/store/app.selectors';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'nx-ng-nest-universal-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public blogs;

  constructor(private store:Store, private meta:Meta) { 
    this.meta.addTags([{ name: 'og:title', content: 'this is the blog page' }])
  }

  ngOnInit(): void {
    this.blogs = this.store.select(blogsSelector);
  }

}
