import { Component, HostListener, Input, OnInit } from '@angular/core';
//import { Cardschema } from '../cardschema';

//import { Cardstore } from '../../../shared/models/cardstore';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';
import { SprintBacklogService } from 'src/app/core/services/sprint-backlog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() name: string;
  @Input() addable: boolean = false;

  _cardStore: SprintBacklog;
  @Input() set cardStore(cards: SprintBacklog) {
    if (cards && this.name) {
      this._cardStore = cards;
      this.list = this.cardStore.getTasksIdForStatus(this.name);
    }
  };
  get cardStore() : SprintBacklog {
    return this._cardStore;
  }
  
  list: Array<number>;

  constructor(private sprintBacklogService : SprintBacklogService) { }

  ngOnInit(): void { }
  
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
      this.list.push(cardId);
    }
  }
}