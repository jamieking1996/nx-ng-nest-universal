import { Component, OnInit, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'nx-ng-nest-universal-meta-tags',
  templateUrl: './meta-tags.component.html',
  styleUrls: ['./meta-tags.component.scss']
})
export class MetaTagsComponent implements OnInit {

  @Input() ogTitle:string;

  constructor(private meta:Meta, private location:Location) {}

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: this.ogTitle },
      { name: 'og:image', content: 'https://www.goodthingsfoundation.org/sites/all/themes/gtf2018/images/site-logo.png' },
      { name: 'og:url', content: this.location['_platformLocation']['_doc']['_address'] }
    ]);
  }

}
