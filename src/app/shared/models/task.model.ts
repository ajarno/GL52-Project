import { User, Status } from '.';

export class Task {
    private name : string;
    private tags : Array<string> = new Array();
    private priority : number;
    private description : string;
    private users : Array<User> = new Array();
    private status : Status = Status.TO_DO;

    public getName() : string {
        return this.name;
    }

    public setName(name : string) : void {
        this.name = name;
    }

    public getTags() : Array<string> {
        return this.tags;
    }

    public setTags(tags : Array<string>) : void {
        this.tags = tags;
    }

    public getPriority() : number {
        return this.priority;
    }

    public setPriority(priority : number) : void {
        this.priority = priority;
    }

    public getDescription() : string {
        return this.description;
    }

    public setDescription(description : string) : void {
        this.description = description;
    }

    public getStatus() : Status {
        return this.status;
    }

    public setStatus(status : Status) : void {
        this.status = status;
    }

    public getUsers() : Array<User> {
        return this.users;
    }

    public setUsers(users : Array<User>) : void {
        this.users = users;
    }

    public changeStatus(status : Status) : void {
        this.setStatus(status);
    }

    public addTag(tag : string) : void {
        this.tags.push(tag);
    }

    public removeTag(tag : string) : void {
        let index = this.tags.indexOf(tag);
        this.tags.splice(index, 1);
    }

    public addUser(user : User) : void {
        this.users.push(user);
    }

    public removeUser(user : User) : void {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
    }
    
    public assignMember(user : User) : void {
        this.addUser(user);
    }

    public assignMembers(users : Array<User>) : void {
        this.setUsers(users);
    }
    
    public changePriority(priority : number) {
        this.setPriority(priority);
    }
}