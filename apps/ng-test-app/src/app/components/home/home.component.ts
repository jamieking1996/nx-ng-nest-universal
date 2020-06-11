import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userSelector } from '../../common/store/app.selectors';
import { UpdateUser } from '../../common/store/app.actions';

@Component({
  selector: 'nx-ng-nest-universal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(UpdateUser());
    this.user = this.store.select(userSelector);
  }

}
