import { Todo } from './todo.model';
import { todoGroup } from './todoGroup';

export type BoardTodos = {
  [key in todoGroup]: Todo[];
};
