export class Story {
  private id: string;
  private name: string;
  private priority: string;
  private status: string;

  constructor(_id: string, _name: string, _priority: string = null, _status: string = "To do") {
    this.id = _id;
    this.name = _name;
    this.priority = _priority;
    this.status = _status;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPriority(): string {
    return this.priority;
  }

  public setPriority(priority: string): void {
    this.priority = priority;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }
}
