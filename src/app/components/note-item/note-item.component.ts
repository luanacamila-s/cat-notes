import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})

// TODO passar CSS para esse componente de acordo com o Figma
export class NoteItemComponent implements OnInit {
  @Input() todo!: TodoItem;
  @Output() deleteItem = new EventEmitter<number>();
  @Output() editItem = new EventEmitter<TodoItem>();

  @HostBinding('style.background')
  background = 'red'

  formattedDate!: string;

  constructor() {
  }


  formatterDate(timeStr: Date): string {
    const time = new Date(timeStr)
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
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

  ngOnInit() {
    this.formattedDate = this.formatterDate(this.todo.createdAt)
    this.background = this.todo.color;

  }
}
