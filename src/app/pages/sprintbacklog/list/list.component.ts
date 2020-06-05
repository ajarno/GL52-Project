import { Component, HostListener, Input, OnInit } from '@angular/core';
//import { Cardschema } from '../cardschema';

//import { Cardstore } from '../../../shared/models/cardstore';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { Listtask } from 'src/app/shared/models/Listtask';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: Listtask;
  @Input() cardStore: SprintBacklog;

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