
import { Symbols } from './Symbols';

export class Task {
    private id :string;
    private title : string;
    //private tags : Array<string> = new Array(5);
    private priority : Symbols;
    private description : string;
    //private users : Array<User> = new Array(5);
    private deadline: Date;
    private members: string[];

    public getDeadline():Date{
        return this.deadline;
    }
    public setDeadline(deadline:Date){
        this.deadline=deadline;

    }
    public getMembers():string[]{
        return this.members;
    }
    public setMembers(members:string[]){
        this.members=members;

    }

    public getId():string{
        return this.id;
    }
    public setId(id:string){
        this.id = id;
    }

    public getTitle() : string {
        return this.title;
    }

    public setTitle(title : string) : void {
        this.title = title;
    }

    // public getTags() : Array<string> {
    //     return this.tags;
    // }

    // public setTags(tags : Array<string>) : void {
    //     this.tags = tags;
    // }

    public getPriority() : Symbols {
        return this.priority;
    }

    public setPriority(priority : Symbols) : void {
        this.priority = priority;
    }

    public getDescription() : string {
        return this.description;
    }

    public setDescription(description : string) : void {
        this.description = description;
    }

    // public getStatus() : Status {
    //     return this.status;
    // }

    // public setStatus(status : Status) : void {
    //     this.status = status;
    // }

    // public getUsers() : Array<User> {
    //     return this.users;
    // }

    // public setUsers(users : Array<User>) : void {
    //     this.users = users;
    // }

    // public changeStatus(status : Status) : void {
    //     this.setStatus(status);
    // }

    // public addTag(tag : string) : void {
    //     this.tags.push(tag);
    // }

    // public removeTag(tag : string) : void {
    //     let index = this.tags.indexOf(tag);
    //     this.tags.splice(index, 1);
    // }

    // public addUser(user : User) : void {
    //     this.users.push(user);
    // }

    // public removeUser(user : User) : void {
    //     let index = this.users.indexOf(user);
    //     this.users.splice(index, 1);
    // }
    
    // public assignMember(user : User) : void {
    //     this.addUser(user);
    // }

    // public assignMembers(users : Array<User>) : void {
    //     this.setUsers(users);
    // }
    
    // public changePriority(priority : Symbols) {
    //     this.setPriority(priority);
    // }
}