import { Component, Input } from '@angular/core';

@Component({
  selector: 'facebook-ico',
  imports: [],
  template: `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.7515C22 7.23146 17.52 2.75146 12 2.75146C6.48 2.75146 2 7.23146 2 12.7515C2 17.5915 5.44 21.6215 10 22.5515V15.7515H8V12.7515H10V10.2515C10 8.32147 11.57 6.75146 13.5 6.75146H16V9.75146H14C13.45 9.75146 13 10.2015 13 10.7515V12.7515H16V15.7515H13V22.7015C18.05 22.2015 22 17.9415 22 12.7515Z" fill="#E5E5E5"/>
</svg>
`,
})
export class FacebookIco {
  @Input() height:number = 20;
  @Input() width:number = 20;
}
