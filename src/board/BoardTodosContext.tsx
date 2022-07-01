import { createContext } from '@builder.io/qwik';
import { BoardTodos } from './BoardTodos';

export const BoardTodosContext = createContext<BoardTodos>(
  'Board-Todos-Context'
);
