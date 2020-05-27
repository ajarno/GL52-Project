import { Component, ViewChild, DoCheck } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements DoCheck {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean = true;
  role: string;

  constructor(private router : Router) {
    if (localStorage.getItem("role") === null) {
      this.opened = false;
    }
  }
  
  ngDoCheck() {
    let newRole = localStorage.getItem("role");
    
    if (newRole !== this.role) {
      this.role = newRole;
      this.opened = (this.role !== null);
    }
  }

  logout() {
    localStorage.removeItem("role");
    this.router.navigate(["/authentication"]);
  }
}
