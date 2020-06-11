import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {
 // dialog base attributes
 visible = true;
 selectable = true;
 removable = true;
 addOnBlur = true;

 // required fields to create the sprint
 name = new FormControl('', [Validators.required]);;
 priority: string = "Medium";

 constructor(private dialogRef: MatDialogRef<NewStoryComponent>) { }

 ngOnInit() { }

 save() {
   this.dialogRef.close({ name: this.name.value, priority: this.priority });
 }

 close() {
   this.dialogRef.close();
 }
}
