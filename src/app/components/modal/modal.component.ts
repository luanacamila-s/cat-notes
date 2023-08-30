import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { getRandomId } from 'src/helpers';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  constructor(private todoService: TodoService) {}

  @Output() closeModal = new EventEmitter()
  @Output() openModelInput = new EventEmitter()

  display = 'none'
  noteColor = '#A2E1FC'
  description: string = '';

  show() {
    this.display = 'flex'
  }

  close() {
    this.display = 'none'
  }

  createNote() {
    this.todoService.addTodo({
      createdAt: new Date(),
      updatedAt: null,
      description: this.description,
      done: false,
      color: this.noteColor,
      id: getRandomId()
    })
    this.close();
  }

  onTextAreaInputValueChange(event: Event) {
    const { target } = event;
    this.description = (target as any).value
  }
}
