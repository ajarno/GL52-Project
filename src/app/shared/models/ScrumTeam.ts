class ScrumTeam{
    private members:Array<ScrumTeamMember>;

    public getMembers():Array<ScrumTeamMember>{
        return this.members;
    }
    public setMembers(members:Array<ScrumTeamMember>):void{
        this.members=members;
    }
    public addMember(member:ScrumTeamMember):void{
        this.members.push(member);
    }
    public removeMember(member:ScrumTeamMember):void{
        let index=this.members.indexOf(member);
        this.members.splice(index,1);
    }
    public changeTaskPriority(task:Task,priority:number):void{
        task.changePriority(priority);
    }   
}