import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './../shared/libs/constants/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-testing';
  newContent: string = '';
  private _todos: Todo[] = [
    {
      id: 1,
      content: 'Apprendre HTML',
      done: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      content: 'Apprendre CSS',
      done: false,
      createdAt: new Date(),
    },
  ];
  get todos() {
    return this._todos;
  }
  addTodo(form: NgForm) {}
}
