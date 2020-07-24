import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptOldComponent } from './adapt-old.component';

describe('AdaptOldComponent', () => {
  let component: AdaptOldComponent;
  let fixture: ComponentFixture<AdaptOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
