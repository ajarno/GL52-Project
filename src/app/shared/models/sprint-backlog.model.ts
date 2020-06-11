import { Task } from './task.model';
import { generate } from 'shortid';

export class SprintBacklog {
    private id: number;
    private storyId: string;
    private projectId: number;
    private sprintName: string;
    private startDate : Date;
    private endDate : Date;
    private tasks: Array<Task>;

    constructor(storyId: string, projectId: number, sprintName: string, startDate: string, endDate: string, tasks?: Array<any>, id?: number) {
        if (id) this.id = id;
        this.storyId = storyId;
        this.projectId = projectId;
        this.sprintName = sprintName;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.tasks = (tasks && tasks != []) ? this._initTasks(tasks) : new Array();
    }

    private _initTasks(tasks: Array<any>): Array<Task> {
        return tasks.map(task => new Task(task.id, task.title, task.priority, task.description, task.deadline, task.members, task.status));
    }

    getUnfinishedTasks(): Array<Task> {
        return this.tasks.filter(task => task.getStatus() === "To do" || task.getStatus() === "Doing")
    }

    getSprintId(): number {
        return this.id;
    }

    getSprintName() : string {
        return this.sprintName;
    }

    getStoryId() : string {
        return this.storyId;
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