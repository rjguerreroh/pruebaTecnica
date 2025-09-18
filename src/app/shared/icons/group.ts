import { Component, Input } from '@angular/core';

@Component({
  selector: 'group-ico',
  imports: [],
  template: `<svg class="inline-block" [attr.width]="width" [attr.height]="height" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.03 14.818C17.6076 14.6068 18.1064 14.2233 18.4588 13.7192C18.8111 13.2152 19.0001 12.615 19 12V4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V12C1 13.317 1.85 14.436 3.03 14.84" stroke="#F6F6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18C6 17.4696 6.21071 16.9609 6.58579 16.5858C6.96086 16.2107 7.46957 16 8 16H12C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18M8 11C8 11.5304 8.21071 12.0391 8.58579 12.4142C8.96086 12.7893 9.46957 13 10 13C10.5304 13 11.0391 12.7893 11.4142 12.4142C11.7893 12.0391 12 11.5304 12 11C12 10.4696 11.7893 9.96086 11.4142 9.58579C11.0391 9.21071 10.5304 9 10 9C9.46957 9 8.96086 9.21071 8.58579 9.58579C8.21071 9.96086 8 10.4696 8 11Z" stroke="#F6F6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
})
export class GroupIco {
  @Input() height:number = 20;
  @Input() width:number = 20;
}
