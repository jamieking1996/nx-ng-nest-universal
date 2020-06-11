import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { makeStateKey } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/');
  }
}
