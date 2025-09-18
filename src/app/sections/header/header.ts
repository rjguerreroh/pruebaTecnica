import { Component } from '@angular/core';
import { Logo } from "../../shared/icons/logo";
import { SearchIco } from "../../shared/icons/search";
import { MenuIco } from '../../shared/icons/menu';
import { GroupIco } from '../../shared/icons/group';
import { MoneyIco } from '../../shared/icons/money';


@Component({
  selector: 'app-header',
  imports: [Logo, SearchIco, MenuIco, GroupIco, MoneyIco],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
