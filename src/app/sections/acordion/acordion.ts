import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
interface AccordionItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-acordion',
  imports: [CommonModule],
  templateUrl: './acordion.html',
  styleUrl: './acordion.css'
})
export class AccordionComponent {
  items: AccordionItem[] = [
    {
      question: '¿Lorem ipsum dolor sit amet consectetur adipiscing?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis...',
      open: false
    },
    {
      question: '¿Elit posuere blandit quam himenaeos eros nunc?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Netus cras pellentesque urna eu aenean sem mattis felis...',
      open: true
    },
    {
      question: '¿Tempus nisi volutpat integer odio vel?',
      answer: 'Respuesta de ejemplo para esta pregunta.',
      open: false
    },
    {
      question: '¿Dapibus vitae taciti mus metus tincidunt eu vestibulum?',
      answer: 'Respuesta de ejemplo para esta pregunta.',
      open: false
    },
    {
      question: '¿Maecenas pharetra purus id lacus bibendum sollicitudin?',
      answer: 'Respuesta de ejemplo para esta pregunta.',
      open: false
    }
  ];

  toggleItem(index: number) {
    this.items[index].open = !this.items[index].open;
  }
}