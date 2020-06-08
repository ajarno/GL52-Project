import { Symbols } from "./Symbols";

export class Task {
  private id: string;
  private title: string;
  private priority: string;
  private description: string;
  //private users : Array<User> = new Array(5);
  private deadline: Date;
  private members: string[];
  private status: string;

  constructor(_id: string, _title: string, _priority: string = null, _description: string = null, _deadline: Date = null, _members: string[] = [], _status: string = "To do") {
    this.id = _id;
    this.title = _title;
    this.priority = _priority;
    this.description = _description;
    this.deadline = (_deadline ? new Date(_deadline) : null);
    this.members = _members;
    this.status = _status;
  }

  public getDeadline(): Date {
    return this.deadline;
  }
  public setDeadline(deadline: Date) {
    this.deadline = deadline;
  }
  public getMembers(): string[] {
    return this.members;
  }
  public setMembers(members: string[]) {
    this.members = members;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  // public getTags() : Array<string> {
  //     return this.tags;
  // }

  // public setTags(tags : Array<string>) : void {
  //     this.tags = tags;
  // }

  public getPriority(): string {
    return this.priority;
  }

  public setPriority(priority: string): void {
    this.priority = priority;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

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
