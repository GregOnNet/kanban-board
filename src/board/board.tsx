import {
  component$,
  Host,
  useContextProvider,
  useStore
} from '@builder.io/qwik';
import { randBoolean, randSentence, randUuid } from '@ngneat/falso';
import { BoardTodosContext } from './BoardTodosContext';
import { TodoList } from './todo-list';
import { Todo } from './todo.model';

export const Board = component$(() => {
  const todos = useStore({
    ready: createTodos({ length: 2 }),
    doing: createTodos({ length: 3 }),
    done: createTodos({ length: 1 })
  });

  useContextProvider(BoardTodosContext, todos);

  return (
    <Host class="kanban-board">
      <TodoList heading="ToDo" group="ready"></TodoList>
      <TodoList heading="Doing" group="doing"></TodoList>
      <TodoList heading="Done" group="done"></TodoList>
    </Host>
  );
});

export function createTodos(opts: { length: number }): Todo[] {
  return [...Array(opts.length)].map(() => ({
    id: randUuid(),
    text: randSentence(),
    isDone: randBoolean()
  }));
}
