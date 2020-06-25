import { Component, OnInit } from '@angular/core';
declare const TinCan: any;

@Component({
  selector: 'nx-ng-nest-universal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private lrs;

  constructor() { }

  ngOnInit(): void {
    this.lrs = new TinCan.LRS({
      endpoint: "http://ec2-18-132-67-205.eu-west-2.compute.amazonaws.com/data/xAPI"
    });
    console.log('lrs', this.lrs);
  }

}
