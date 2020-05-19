abstract class Backlog{
    private tasks:Array<Task>=new Array(5);
    public getTasks():Array<Task>{
        return this.tasks;
    }
    public setTasks(tasks:Array<Task>):void{
        this.tasks=tasks;
    }
    public addTask(task:Task):void{
        this.tasks.push(task);
    }
    public removeTask(task:Task):void{
        let index=this.tasks.indexOf(task);
        this.tasks.splice(index,1);
    }
}