import { Project } from "./project.model";
import { Task } from "./task.model";

class ProductOwner extends User {

    public addTask(project : Project, task : Task) {
        // project.getProductBacklog().addTask(task);
    }

    // public changeTaskStatus(task : Task, status : Status) : void {
    //     task.changeStatus(status);
    // }

    public createProductBacklog(project : Project) : void {
        // let productBacklog = new ProductBacklog();
        // project.setProductBacklog(productBacklog);
    }
    
    // public changeTaskPriority(task : Task, priority : number) : void {
    //     task.changePriority(priority);
    // }
}