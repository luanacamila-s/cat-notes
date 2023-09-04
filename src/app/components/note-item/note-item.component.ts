import { Component, EventEmitter, Host, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { TodoItem } from 'src/models/todo-item';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})

// TODO passar CSS para esse componente de acordo com o Figma
export class NoteItemComponent implements OnInit {
  @Input() todo!: TodoItem;

  // HostBinding --> altera o css da tag via codigo
  @HostBinding('style.background')
  background = 'red'

  @HostBinding('style.width')
  width = '300px'

  @HostBinding('style.height')
  height = '160px'

  formattedDate!: string;

  constructor(private todoService: TodoService) {
  }

  formatterDate(timeStr: Date): string {
    const time = new Date(timeStr)
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  editNote(update: string) {
    // TODO
  }

  deleteNote(id: number) {
    this.todoService.deleteTask(id)
    location.reload()
  }

  getSize(size: number, _default: string): string {
    if (size <= 12) return _default
    return 'auto';
  }

  ngOnInit() {
    this.formattedDate = this.formatterDate(this.todo.createdAt)
    this.background = this.todo.color;
    this.width = this.getSize(this.todo.description.length, '300px')
    this.height = this.getSize(this.todo.description.length, '160px')
  }
}
