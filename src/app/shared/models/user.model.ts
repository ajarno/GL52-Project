abstract class User {
    private firstName: string;
    private lastName: string;
    private age: number;
    private job: string;
    private email: string;


    public getFirstName() : string {
        return this.firstName;
    }
    
    public setFirstName(firstName : string) : void {
        this.firstName = firstName;
    }

    public getLastName() : string {
        return this.lastName;
    }

    public setLastName(lastName : string) : void {
        this.lastName = lastName;
    }

    public getJob() : string {
        return this.job;
    }

    public setJob(job : string) : void {
        this.job = job;
    }

    public getAge() : number {
        return this.age;
    }

    public setAge(age : number) : void {
        this.age = age;
    }
    public getEmail() : string {
        return this.email;
    }

    public setEmail(email : string) : void {
        this.email = email;
    }

}
