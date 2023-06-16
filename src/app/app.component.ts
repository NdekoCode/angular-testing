import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from './../shared/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-testing';
  newContent: string = '';
  constructor(private _todosService: TodosService) {}
  get todos() {
    return this._todosService.todos;
  }

  addTodo(form: NgForm) {
    if (form.valid) {
      this._todosService.addTodo(this.newContent);
      this.newContent = '';
    }
  }
  removeTodo(id: number | string) {
    this._todosService.removeTodo(id);
  }
}
