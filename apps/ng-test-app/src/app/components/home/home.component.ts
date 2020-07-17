import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'nx-ng-nest-universal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public iframeUrl = this.dom.bypassSecurityTrustResourceUrl("/assets/dominknow-test/index.html?actor=" + encodeURIComponent(JSON.stringify({mbox:'mailto:jamie.king@goodthingsfoundation.org'})));

  constructor(private dom:DomSanitizer) { }

  ngOnInit(): void {}

}
