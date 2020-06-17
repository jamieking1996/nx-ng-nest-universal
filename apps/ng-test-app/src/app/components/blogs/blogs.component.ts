import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { blogsSelector } from '../../common/store/app.selectors';
import { Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'nx-ng-nest-universal-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public blogs;

  constructor(private store:Store, private meta:Meta, private location:Location) { 
    this.meta.addTags([
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'this is the blog page' },
      { name: 'og:image', content: 'https://www.goodthingsfoundation.org/sites/all/themes/gtf2018/images/site-logo.png' },
      { name: 'og:url', content: this.location['_platformLocation']['_doc']['_address'] }
    ]);
  }

  ngOnInit(): void {
    this.blogs = this.store.select(blogsSelector);
  }

}
