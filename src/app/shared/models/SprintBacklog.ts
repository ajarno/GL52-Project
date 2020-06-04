import { Backlog } from "./Backlog";
import { Task } from 'src/app/shared/models/Task';
import { Symbols } from 'src/app/pages/sprintbacklog/edit-dialog/edit-dialog.component';
export class SprintBacklog extends Backlog {
    //cards: Object = {};
    lastid = -1;

    //add a task
    _addCard(card: Task) {
        card.setId(String(++this.lastid));
        this.addTask(card);
        //this.cards[card.getId()] = card;
        return (card.getId());
    }
     
    getCard(cardId: string) {
        return this.getTasks()[cardId];
        // return this.cards[cardId];
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
        //this.cards[id] = null;
    }
}