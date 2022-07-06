import { createContext } from '@builder.io/qwik';
import { BoardTodos } from './models/board-todos';

export const BoardTodosContext = createContext<BoardTodos>(
  'Board-Todos-Context'
);
