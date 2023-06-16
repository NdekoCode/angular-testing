import { Injectable } from '@angular/core';
import { Todo } from './../libs/constants/types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
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

  addTodo(newTodo: string) {
    if (newTodo) {
      this._todos.push({
        id: this._todos.length + 1,
        content: newTodo,
        done: false,
        createdAt: new Date(),
      });
    }
  }
  removeTodo(id: number | string) {
    this._todos = this._todos.filter((t) => t.id !== id);
  }
}
