import { Component } from '@angular/core';
import { TodoItem } from 'src/models/todo-item';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './app-whiteboard.component.html',
  styleUrls: ['./app-whiteboard.component.css']
})
export class AppWhiteboardComponent {
  mockedItems: TodoItem[] = [{
    id: 1,
    description: 'Buy cat food',
    done: false,
    createdAt: new Date(),
    updatedAt: null,
  }]

  removeItem(id: number) {
    this.mockedItems = this.mockedItems.filter((item) => item.id !== id);
  }

  addItem(todo: TodoItem) {
    this.mockedItems.unshift(todo)
  }

  editItem(todo: TodoItem) {
    this.mockedItems = this.mockedItems.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    })
  }

  get items(): TodoItem[] | string {
    if (this.mockedItems.length === 0) {
      return 'Você não possui notas!'
    }
    return this.mockedItems;
  }
}
