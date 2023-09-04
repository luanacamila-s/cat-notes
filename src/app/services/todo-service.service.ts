import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from 'src/models';

@Injectable({
  providedIn: 'root'
})

/**
  Camada de codigo que gerencia o armazenamento das tarefas.
*/
export class TodoService {
  // estão sendo armazenados no localStorage
  private todos = JSON.parse(localStorage.getItem('todos') ?? '[]') as TodoItem[]

  getTodos() {
    const todos = localStorage.getItem('todos') ?? '[]'
    return JSON.parse(todos)
  }

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  deleteTask(id: number) {
    const newTodos = this.todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
}
