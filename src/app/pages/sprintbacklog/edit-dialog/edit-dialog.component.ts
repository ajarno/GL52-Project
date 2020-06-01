import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


export interface DialogData {
  title: string;
  description: string;
  deadline: Date;
  members: Array<string>;
  priority: boolean;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  title: string;
  description: string;
  deadline: Date;
  members: Array<string>;
  priority: boolean;

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.title = data.title;
      this.description = data.description;
      this.priority = data.priority;

      if(data.deadline) {
        this.deadline = new Date(data.deadline);
      }

      if(data.members) {
        this.members = Object.assign([], data.members);
      } else {
        this.members = new Array;
      }
  }

  ngOnInit() {
  }

  save() {
    if(this.members.length === 0) {
      this.members = null;
    }
    this.data = { title: this.title, description: this.description, deadline: this.deadline, members: this.members, priority: this.priority };
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  hasTitle() {
    this.title = this.title.trim();
    return !this.title;
  }

  onDeleteClicked() {
    this.dialogRef.close("delete");
  }

  public compareDatetoToday(): string {
    let d = new Date(this.deadline); 
    let today = new Date();
    today.setHours(0,0,0,0);

    // Check if the dates are near
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    let dayDifference = Math.round((d.getTime() - today.getTime())/(oneDay));
    if (dayDifference < 3 && dayDifference > -1) return 'near';

    else {
      // Check if the first is greater than second
      if (d > today) return 'else';
  
      // Check if the first is less than second
      if (d < today) return 'late';
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add member
    if ((value || '').trim()) {
      this.members.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(member: string): void {
    const index = this.members.indexOf(member);
    if (index >= 0) this.members.splice(index, 1);
  }
}
