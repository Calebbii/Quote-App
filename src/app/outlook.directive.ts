import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOutlook]'
})
export class OutlookDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor="#F2E4D4"
  }

}
