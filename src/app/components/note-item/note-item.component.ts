import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})

// TODO passar CSS para esse componente de acordo com o Figma
export class NoteItemComponent implements OnInit {
  @Input() todo: TodoItem;
  @Output() deleteItem = new EventEmitter<number>();
  @Output() editItem = new EventEmitter<TodoItem>();

  constructor() {
    this.todo = {
      id: 1,
      description: '',
      done: false,
      updatedAt: null,
      createdAt: new Date(),
    }
  }

  deleteNote(id: number) {
    this.deleteItem.emit(id);
  }

  editNote(update: string) {
    this.editItem.emit({
      ...this.todo,
      description: update,
      updatedAt: new Date(),
    })
  }

  ngOnInit() {}
}
