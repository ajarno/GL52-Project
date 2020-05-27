import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-choice',
  templateUrl: './role-choice.component.html',
  styleUrls: ['./role-choice.component.css']
})
export class RoleChoiceComponent implements OnInit {

  @Input() role: string;
  @Input() imgPath: string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  validate() {
    localStorage.setItem("role", this.role);
    this.router.navigate(['']);
  }
}
