import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  todo = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  inProgress = ['Task 6', 'Task 7', 'Task 8'];
  done = ['Task 9', 'Task 10'];

  constructor() { }

  ngOnInit() {
  }

}
