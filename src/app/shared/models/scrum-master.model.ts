import { Project } from "./project.model";
import { Meeting } from "./meeting.model";
import { Task } from "./task.model";

class ScrumMaster extends User {
    
    public createMeeting(project : Project, meeting : Meeting) : void {
        // project.addMeeting(meeting);
    }

    public createProject() : void {
        // let project = new Project();
        //stock project
    }

    public estimateTask(project : Project, task : Task) : void {
        // project.getProductBacklog().addTask(task);
    }
}
