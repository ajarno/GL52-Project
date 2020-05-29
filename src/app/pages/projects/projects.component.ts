import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Project 1', cols: 1, rows: 1 },
          { title: 'Project 2', cols: 1, rows: 1 },
          { title: 'Project 3', cols: 1, rows: 1 },
          { title: 'Project 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Project 1', cols: 1, rows: 1 },
        { title: 'Project 2', cols: 1, rows: 1 },
        { title: 'Project 3', cols: 1, rows: 1 },
        { title: 'Project 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
