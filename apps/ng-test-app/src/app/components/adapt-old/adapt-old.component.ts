import { Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'nx-ng-nest-universal-adapt-old',
  templateUrl: './adapt-old.component.html',
  styleUrls: ['./adapt-old.component.scss']
})
export class AdaptOldComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  public isNavigationDisabled:boolean = false;

  observer;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {}

  public isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public navigate() {
    this.iframe.nativeElement.contentWindow.document.getElementsByClassName('trickle-button-inner')[0].children[0].click();
  }

  public test() {
    this.observer = new MutationObserver(mutations => {
      if(this.iframe) { 
        let button = this.iframe.nativeElement.contentWindow.document.getElementsByClassName('trickle-button-inner')[0];
        if(button) {
          this.isNavigationDisabled = button.innerHTML.includes('disabled');
          return;
        }
      }
      this.isNavigationDisabled = true;
    });
    let observerOptions = {
      childList: true,
      attributes: true,
      subtree: true 
    }
    this.observer.observe(this.iframe.nativeElement.contentWindow.document.body, observerOptions);
  }

}
