import { Component, EventEmitter, Output } from '@angular/core';
import { getRandomId } from 'src/helpers';
import { TodoItem } from 'src/models/todo-item';


@Component({
  selector: 'app-add-button',
  templateUrl: './app-add-button.component.html',
  styleUrls: ['./app-add-button.component.css']
})
export class AppAddButtonComponent {
  constructor() {}
}
