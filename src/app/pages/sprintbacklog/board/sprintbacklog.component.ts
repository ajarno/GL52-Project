import { Component, OnInit } from '@angular/core';
import { Cardstore } from '../cardstore';
//cardstore用來創建新的卡片
import { Listschema } from '../listschema';
import { Symbols } from '../edit-dialog/edit-dialog.component';
//name,cards

@Component({
  selector: 'app-sprintbacklog',
  templateUrl: './sprintbacklog.component.html',
  styleUrls: ['./sprintbacklog.component.css']
})

export class SprintBacklogComponent implements OnInit {

  cardStore: Cardstore;
  lists: Listschema[];
  constructor() { }

  setMockData(): void {
    this.cardStore = new Cardstore();
    //創建LIST
    const lists: Listschema[] = [
      {
        name: 'TODO',
        cards: []
      },
      {
        name: 'DOING',
        cards: []
      },
      {
        name: 'DONE',
        cards: []
      }
    ]
    this.lists = lists;
  }

  //創建小卡片並把它放入LIST中
  // 小卡片里的格式（標題，在哪一列，描述，小鈴鐺，成員，截止日期）
  _fillList(title: string, list: number, description: string = null, priority: boolean = false, members: string[] = null, deadline: Date = null): void {
    const cardId =  this.cardStore.newCard(title, description, members, deadline, Symbols.Low);
    //將創建好的卡片放入LIST中
    this.lists[list].cards.push(cardId);
  }

  initLists(): void {
    this._fillList("Rédiger le Cahier des Charges", 1, "Définir les spécifications techniques, le contexte du projet, vérifier les brevets, faire l'étude de marché", true);
    this._fillList("Faire le SADT", 2);
    this._fillList("Réaliser une maquette", 2);
    this._fillList("Concevoir l'application", 0, null, true, ["Marie", "Jacques", "Jean-Charles", "Alexane"], new Date("08-22-2019"));
    this._fillList("Choisir le sujet de projet", 0, "Définir le périmètre du sujet, les objectifs à atteindre, ainsi que les outils de réalisation utilisés.");
    this._fillList("Définir le groupe de projet", 1);
  }

  // _getLengthList(list): number {
  //   return this.lists[list].cards.length;
  // }

  // _getTotal(): number {
  //   return this._getLengthList(0) + this._getLengthList(1) + this._getLengthList(2) + this._getLengthList(3);
  // }

  // getPercentage(): number {
  //   return this._getLengthList(3)/this._getTotal()*100
  // }
 
  ngOnInit() {
    this.setMockData();
    this.initLists();
  }
}
