import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Tab {
  title: string;
  content: {
    image: string;
    text: string[];
  };
}
@Component({
  selector: 'app-tags-info',
  imports: [CommonModule],
  templateUrl: './tags-info.html',
  styleUrl: './tags-info.css'
})

export class TagsInfo {
  tabs: Tab[] = [
    {
      title: 'Mauris vulputate',
      content: {
        image: '/img/service.jpg',
        text: [
          'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.',
          'Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.'
        ]
      }
    },
    {
      title: 'Lorem sed lacus',
      content: {
        image: '/img/demo2.jpg',
        text: [
          'Contenido de la pestaña Lorem sed lacus.',
          'Aquí puedes poner otro texto diferente.'
        ]
      }
    },
    {
      title: 'Lacus efficitur',
      content: {
        image: '/img/female.jpg',
        text: [
          'Contenido de la pestaña Lacus efficitur.',
          'Más información en este tab.'
        ]
      }
    }
  ];

  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}
