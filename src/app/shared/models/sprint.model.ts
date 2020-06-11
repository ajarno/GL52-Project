import { SprintBacklog } from './sprint-backlog.model';

export class Sprint {
    private name : string;
    private startDate : Date;
    private endDate : Date;
    private sprintBacklog : SprintBacklog;

    public getName() : string {
        return this.name;
    }

    public setName(name : string) : void {
        this.name = name;
    }

    public getStartDate() : Date {
        return this.startDate;
    }

    public setStartDate(startDate : Date) : void {
        this.startDate = startDate;
    }

    public getEndDate() : Date {
        return this.endDate;
    }

    public setEndDate(endDate : Date) : void {
        this.endDate = endDate;
    }

    public getSprintBacklog() : SprintBacklog {
        return this.sprintBacklog;
    }

    public setSprintBacklog(sprintBacklog : SprintBacklog) : void {
        this.sprintBacklog = sprintBacklog;
    }
}