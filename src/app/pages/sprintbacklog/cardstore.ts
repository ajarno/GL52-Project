
// cardschema 所有CARD的內容
import { Cardschema } from './cardschema';
 
export class Cardstore {
  cards: Object = {};
  lastid = -1;
  
  _addCard(card: Cardschema) {
    card.id = String(++this.lastid);
    this.cards[card.id] = card;
    return (card.id);
  }
 
  getCard(cardId: string) {
    return this.cards[cardId];
  }
 
  newCard(title: string, description: string = null, members: string[] = null, deadline: Date = null, priority: boolean = false): string {
    const card = new Cardschema();
    card.title = title;
    card.description = description;
    card.members = members;
    card.deadline = deadline;
    card.priority = priority;
    return (this._addCard(card));
  }

  deleteCard(id: string): void {
    this.cards[id] = null;
  }
}
