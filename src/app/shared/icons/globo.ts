import { Component, Input } from '@angular/core';

@Component({
  selector: 'globo-ico',
  imports: [],
  template: `
<svg class="inline-block" [attr.width]="width" [attr.height]="height" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 13.3757L24 8.37573L44 13.3757L24 18.3757L4 13.3757Z" stroke="#F6F6F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 16.3757V26.3457C13 26.3457 18 29.3757 24 29.3757C30 29.3757 35 26.3457 35 26.3457V16.3757M7 14.3757V36.3757" stroke="#F6F6F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 34.3757H10V40.3757H4V34.3757Z" fill="#F6F6F6" stroke="#F6F6F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class GloboIco {
  @Input() height:number = 20;
  @Input() width:number = 20;
}
