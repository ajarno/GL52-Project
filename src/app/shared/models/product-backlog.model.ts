import { Story } from './story.model';
import { generate } from 'shortid';

export class ProductBacklog {
    private id: number;
    private projectId: number;
    private stories: Array<Story>;

    constructor(projectId: number, stories?: Array<any>, id?: number) {
        this.id = id;
        this.projectId = projectId; 
        this.stories = (stories && stories != [])
        ? this._initStories(stories) : new Array();
    }

    public getId(): number {
        return this.id;
    }
    
    private _initStories(stories: Array<any>): Array<Story> {
        return stories.map(story => new Story(story.id, story.name, story.priority, story.status));
    }

    public getProjectId(): number {
        return this.projectId;
    }
    
    public getStories(): Array<Story> {
        return this.stories;
    }

    public addStory(name: string, priority: string): void {
        this.stories.push(new Story(generate(), name, priority));
    }

    public updateStoryStatus(storyId: string, status: string): void {
        const story: Story = this.stories.find(story => story.getId() == storyId);
        story.setStatus(status);
    }
}