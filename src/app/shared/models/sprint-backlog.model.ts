import { Task } from './task.model';
import { Symbols } from './Symbols';

export class SprintBacklog {
    private sprintName: string;
    private tasks: Array<Task>;

    constructor(backlog) {
        this.sprintName = backlog.sprintName;
        this.tasks = backlog.tasks.map(task => new Task(task.id, task.title, task.priority, task.description, task.deadline, task.members, task.status));
    }

    getSprintName() : string {
        return this.sprintName;
    }

    getTasksIdForStatus(status: string) : Array<number> {
        const filteredArray = this.tasks.filter(task => task.getStatus() === status);
        console.log(status);
        console.table(filteredArray);

        return filteredArray.map(task => task.getId());
    }

    _addCard(card: Task) {
        this.tasks.push(card);

        return (card.getId());
    }
     
    getCard(cardId: number) {
        return this.tasks.find(task => task.getId() === cardId);
    }
     
    newCard(title: string, description: string = null, members: string[] = null, deadline: Date = null, priority: string = null): number {
        const card = new Task(this.tasks.length + 1, title, priority, description, deadline, members, status);

        return (this._addCard(card));
    }
    
    deleteCard(id: string): void {
        //this.cards[id] = null;
    }
}