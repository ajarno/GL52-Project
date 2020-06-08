import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
//import { Cardschema } from '../cardschema';

//import { Cardstore } from '../../../shared/models/cardstore';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { SprintBacklog } from 'src/app/shared/models/sprint-backlog.model';

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
  
  list: Array<string>;
  @Output() updated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }
  
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const previousList = [...this.list]; // clone the list before update
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      const idOfTransferedCard: string = this.list.find(num => !previousList.includes(num));
      this.cardStore.getCard(idOfTransferedCard).setStatus(this.name);
      this.updateSprint();
    }
  }
  
  onEnter(value: string) {
    value = value.trim();
    if (value) {
      const cardId =  this.cardStore.newCard(value, this.name);
      this.list.push(cardId);
      this.updateSprint();
    }
  }

  updateSprint() {
    this.updated.emit();
  }
}