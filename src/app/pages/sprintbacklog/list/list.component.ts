import { Component, HostListener, Input, OnInit } from '@angular/core';
//import { Cardschema } from '../cardschema';
import { Listschema } from '../listschema';
import { Cardstore } from '../cardstore';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: Listschema;
  @Input() cardStore: Cardstore;

  constructor() { }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  onEnter(value: string) {
    value = value.trim();
    if (value) {
      const cardId =  this.cardStore.newCard(value);
      this.list.cards.push(cardId);
    }
  }

  ngOnInit(): void {
  }
}