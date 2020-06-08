import { Task } from './task.model';
import { generate } from 'shortid';

export class SprintBacklog {
    private id: string;
    private storyId: number;
    private projectId: number;
    private sprintName: string;
    private tasks: Array<Task>;

    constructor(backlog?) {
        if (backlog) {
            this.id = backlog.id;
            this.storyId = backlog.storyId;
            this.projectId = backlog.projectId;
            this.sprintName = backlog.sprintName;
            this.tasks = backlog.tasks.map(task => 
                new Task(task.id, task.title, task.priority, task.description, task.deadline, task.members, task.status)
            );
        }
    }

    getSprintId(): string {
        return this.id;
    }

    getSprintName() : string {
        return this.sprintName;
    }

    getTasksIdForStatus(status: string) : Array<string> {
        const filteredArray = this.tasks.filter(task => task.getStatus() === status);
        // console.log(status);
        // console.table(filteredArray);

        return filteredArray.map(task => task.getId());
    }

    getCard(cardId: string) {
        return this.tasks.find(task => task.getId() === cardId);
    }
     
    newCard(title: string, status: string, description: string = null, members: string[] = null, deadline: Date = null, priority: string = null): string {
        const card = new Task(generate(), title, priority, description, deadline, members, status);
        this.tasks.push(card);

        return (card.getId());
    }
    
    deleteCard(id: string): void {
        this.tasks = this.tasks.filter((task: Task) => task.getId() !== id);
    }
}