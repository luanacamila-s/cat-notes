import { TodoService } from './../../services/todo-service.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/models/todo-item';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './app-whiteboard.component.html',
  styleUrls: ['./app-whiteboard.component.css']
})
export class AppWhiteboardComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}

  get items(): TodoItem[] {
    return this.todoService.getTodos();
  }
}
