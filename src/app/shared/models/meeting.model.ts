import { User } from '.';

export class Meeting {
    private startTime : Date;

    private endTime : Date;

    private participants : Array<User> = new Array();

    public getStartTime() : Date {
        return this.startTime;
    }

    public setStartTime(startTime : Date) : void {
        this.startTime = startTime; 
    }

    public getEndTime() : Date {
        return this.endTime;
    }

    public setEndTime(endTime : Date) : void {
        this.endTime = endTime;
    }

    public getParticipants() : Array<User> {
        return this.participants;
    }

    public setParticipants(participants : Array<User>) : void {
        this.participants = participants;
    }

    public changeStartDate(date: Date) : void {
        this.setStartTime(date);
    }

    public changeEndDate(date: Date) : void {
        this.setEndTime(date);
    }

    public sendInvitations() : void {
        for (const iterator of this.participants) {
            let email = iterator.getEmail();
            // console.log("send a invatation to" + email);
        }
    }
}