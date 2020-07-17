import { Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare const ADL: any;

@Component({
  selector: 'nx-ng-nest-universal-adapt',
  templateUrl: './adapt.component.html',
  styleUrls: ['./adapt.component.scss']
})
export class AdaptComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http:HttpClient) { }

  ngOnInit(): void {
    if(this.isPlatformBrowser()) {
      this.configureXApiWrapper();
    }
  }

  private configureXApiWrapper() {
    var conf = {
      endpoint : "http://ec2-18-132-244-247.eu-west-2.compute.amazonaws.com/data/xAPI/",
      user : "7d641823aaf7153f9540c58931736c7837fbd00c",
      password : "a446ffe9fb57ceebaddf8298532933dcd2391fa0",
      activity_id: "http://www.learnmyway.com/adapt/1",
      actor: JSON.stringify({
        "objectType": "Agent",
        "name": "testy mctestface",
        "account": {
          "homePage": "http://www.example.com/users",
          "name": "123",
        }
      })
    };
    ADL.XAPIWrapper.changeConfig(conf);

  }

  public addxApiWrapper() {
    this.iframe.nativeElement.contentWindow['xapiWrapper'] = Object.assign(ADL.XAPIWrapper);
    this.iframe.nativeElement.contentWindow['ADL'] = Object.freeze(ADL);
  }

  public deleteStatement() {
    this.http.delete('http://ec2-18-132-244-247.eu-west-2.compute.amazonaws.com/api/v2/statement/5f116f482caa99063532a0dc', {
      headers: { 'Authorization': "Basic N2Q2NDE4MjNhYWY3MTUzZjk1NDBjNTg5MzE3MzZjNzgzN2ZiZDAwYzphNDQ2ZmZlOWZiNTdjZWViYWRkZjgyOTg1MzI5MzNkY2QyMzkxZmEw" }
    }).subscribe();
  }

  public deleteState() {
    this.http.delete('http://ec2-18-132-244-247.eu-west-2.compute.amazonaws.com/data/xAPI/activities/state', {
      headers: { 'Authorization': "Basic N2Q2NDE4MjNhYWY3MTUzZjk1NDBjNTg5MzE3MzZjNzgzN2ZiZDAwYzphNDQ2ZmZlOWZiNTdjZWViYWRkZjgyOTg1MzI5MzNkY2QyMzkxZmEw", 'X-Experience-API-Version': '1.0.3' },
      params: {
        activityId: "http://www.learnmyway.com/adapt/1",
        agent: JSON.stringify({
          "account" : {
            "homePage" : "http://www.example.com/users",
            "name" : "123"
          }
        })
      }
    }).subscribe();
  }

  public getState() {
    this.http.get('http://ec2-18-132-244-247.eu-west-2.compute.amazonaws.com/data/xAPI/activities/state?activityId=http%3A%2F%2Fwww.learnmyway.com%2Fadapt%2F1&agent=%7B%22account%22%3A%7B%22homePage%22%3A%22http%3A%2F%2Fwww.example.com%2Fusers%22%2C%22name%22%3A%22123%22%7D%7D&stateId=components', {
      headers: { 'Authorization': "Basic N2Q2NDE4MjNhYWY3MTUzZjk1NDBjNTg5MzE3MzZjNzgzN2ZiZDAwYzphNDQ2ZmZlOWZiNTdjZWViYWRkZjgyOTg1MzI5MzNkY2QyMzkxZmEw", 'X-Experience-API-Version': '1.0.3' }
    }).subscribe((data) => {
      console.log('data', data);
    });
  }

  public isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
