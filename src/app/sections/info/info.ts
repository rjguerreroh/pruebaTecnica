import { Component } from '@angular/core';
import { GloboIco } from '../../shared/icons/globo';
import { UniversityIco } from '../../shared/icons/university';

@Component({
  selector: 'app-info',
  imports: [GloboIco, UniversityIco],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info {
  infoItems = [
    'Sed accumsan erat id scelerisque sodales',
    'Sed accumsan erat id scelerisque sodales',
    'Sed accumsan erat id scelerisque sodales',
    'Sed accumsan erat id scelerisque sodales'
  ];
}
