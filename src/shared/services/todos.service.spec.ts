import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let _todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _todosService = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(_todosService).toBeTruthy();
  });
  it('Should get all todo', () => {
    const todos = _todosService.todos;
    expect(todos).toBeDefined();
    expect(todos.length).toBeGreaterThan(1);
    expect(Array.isArray(todos)).toBe(true);
  });
  it('Should add Todo', () => {
    const count = _todosService.todos.length;
    const content = 'Apprendre le test';
    _todosService.addTodo(content);
    expect(_todosService.todos.length).toBe(count + 1);
    expect(
      _todosService.todos.find((t) => t.content === content)?.content
    ).toBe(content);
  });
  it('Should delete a tood', () => {
    const count = _todosService.todos.length;
    const id = _todosService.todos[0].id;
    _todosService.removeTodo(id);
    expect(_todosService.todos.length).toBe(count - 1);
    expect(_todosService.todos.find((t) => t.id == id)).toBeUndefined();
  });
});
