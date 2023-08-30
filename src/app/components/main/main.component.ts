import { Component, EventEmitter, Output } from '@angular/core';
import { getRandomId } from 'src/helpers';
import { TodoItem } from 'src/models/todo-item';
import { ModalService } from './../../services/modal-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Output() addItem = new EventEmitter<TodoItem>();
  @Output() openModelInput = new EventEmitter();

  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService.openModal();
  }

  addNote(): void {
    this.addItem.emit({
      id: getRandomId(),
      description: '',
      createdAt: new Date(),
      updatedAt: null,
      color: '##A2E1FC',
      done: false,
    });
  }
}
