import { Symbols } from './edit-dialog/edit-dialog.component';

export class Cardschema {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    members: string[];
    priority: Symbols;
}
