import { component$, Host, useStore } from '@builder.io/qwik';
import { randBoolean, randSentence, randUuid } from '@ngneat/falso';
import { TodoList } from './todo-list';
import { Todo } from './todo.model';

export const Board = component$(() => {
  const todoStore = useStore({
    entities: createTodos({ length: 2 })
  });
  const doingStore = useStore({
    entities: createTodos({ length: 3 })
  });
  const doneStore = useStore({
    entities: createTodos({ length: 1 })
  });

  return (
    <Host class="kanban-board">
      <TodoList heading="ToDo" store={todoStore}></TodoList>
      <TodoList heading="Doing" store={doneStore}></TodoList>
      <TodoList heading="Done" store={doingStore}></TodoList>
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
