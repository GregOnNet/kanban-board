import { Todo } from '../todo.model';
import { todoGroup } from './todo-group';

export type BoardTodos = {
  [key in todoGroup]: Todo[];
};
