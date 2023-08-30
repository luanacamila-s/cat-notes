import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './app-add-button.component.html',
  styleUrls: ['./app-add-button.component.css'],
})
export class AppAddButtonComponent {
  @Output() execute = new EventEmitter<void>();
  constructor() {}
  openModal() {
    this.execute.emit()
  }
}
