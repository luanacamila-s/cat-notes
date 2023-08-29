import { Component, EventEmitter, Output } from '@angular/core';
import { getRandomId } from 'src/helpers';
import { TodoItem } from 'src/models/todo-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Output() addItem = new EventEmitter<TodoItem>();
  @Output() openModelInput = new EventEmitter();

  constructor() {}

  openModal():void {
    this.openModelInput.emit();
  }

  addNote(): void {
    this.addItem.emit({
      id: getRandomId(),
      description: '',
      createdAt: new Date(),
      updatedAt: null,
      done: false,
    });
  }
}
