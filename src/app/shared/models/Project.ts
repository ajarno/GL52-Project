class Project {
    private name : string;

    private description : string;

    private scrumMaster : ScrumMaster;

    private scrumTeam : ScrumTeam;

    private projectOwner : ProjectOwner;

    private meetings : Array<Meeting> = new Array();

    private productBacklog : ProductBacklog;

    private sprints : Array<Sprint> = new Array();



    public getName() : string {
        return this.name;
    }
    
    public setName(name : string) : void {
        this.name = name;
    }

    public getDescription() : string {
        return this.description;
    }

    public setDescription(description : string) : void {
        this.description = description;
    }

    public getScrumMaster() : ScrumMaster {
        return this.scrumMaster;
    }

    public setScrumMaster(scrumMaster : ScrumMaster) : void {
        this.scrumMaster = scrumMaster;
    }

    public getScrumTeam() : ScrumTeam {
        return this.scrumTeam;
    }

    public setScrumTeam(scrumTeam : ScrumTeam) : void {
        this.scrumTeam = scrumTeam;
    }

    public getProjectOwner() : ProjectOwner {
        return this.projectOwner;
    }

    public setProjectOwner(projectOwner : ProjectOwner) : void {
        this.projectOwner = projectOwner;
    }

    public getMeetings() : Array<Meeting> {
        return this.meetings;
    }

    public setMeetings(meetings : Array<Meeting>) : void {
        this.meetings = meetings;
    }

    public getProductBacklog() : ProductBacklog {
        return this.productBacklog;
    }

    public setProductBacklog(productBacklog : ProductBacklog) : void {
        this.productBacklog = productBacklog;
    }

    public getSprints() : Array<Sprint> {
        return this.sprints;
    }

    public setSprints(sprints : Array<Sprint>) : void {
        this.sprints = sprints;
    }

    public addMeeting(meeting : Meeting) : void {
        this.meetings.push(meeting);
    }

    public removeMeeting(meeting : Meeting) : void {
        let index = this.meetings.indexOf(meeting);
        this.meetings.splice(index, 1);
    }

    public addSprint(sprint : Sprint) : void {
        this.sprints.push(sprint);
    }

    public removeSprint(sprint : Sprint) : void {
        let index = this.sprints.indexOf(sprint);
        this.sprints.splice(index, 1);
    }

    public cancelMeeting(meeting : Meeting) : void {
        let participants = meeting.getParticipants();
        for (const iterator of participants) {
            let email = iterator.getEmail();
            console.log("The meeting has been canceled ! =>" + email);
        }
        this.removeMeeting(meeting);
    }
}