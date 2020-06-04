
// cardschema 所有CARD的內容
//import { Cardschema } from './cardschema';
import { Task } from 'src/app/shared/models/Task';
import { Backlog } from 'src/app/shared/models/Backlog';
import { Symbols } from './Symbols';

export class Cardstore extends Backlog{
  //cards: Object = {};
  lastid = -1;
  
  _addCard(card: Task) {
    card.setId(String(++this.lastid));
    this.addTask(card);
    //this.cards[card.getId()] = card;
    return (card.getId());
  }
 
  getCard(cardId: string) {
      return this.getTasks()[cardId];
    //return this.cards[cardId];
  }
 
  newCard(title: string, description: string = null, members: string[] = null, deadline: Date = null, priority: Symbols = Symbols.Low): string {
    const card = new Task();
    card.setTitle(title);
    card.setDescription(description);
    card.setMembers(members);
    card.setDeadline(deadline);
    card.setPriority(priority);
    return (this._addCard(card));
  }

  deleteCard(id: string): void {
    this.getTasks()[id] = null;
    //this.cards[id] = null;
  }
}
