import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-cards',
  imports: [Card],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  cards = [
    { img: '/img/demo.png', title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet.' },
    { img: '/img/demo2.jpg', title: 'Dolor sit amet', description: 'Lorem ipsum dolor sit amet.' },
    { img: '/img/demo3.jpg', title: 'Consectetur', description: 'Lorem ipsum dolor sit amet.' }
  ];
}
