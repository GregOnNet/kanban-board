import { component$, Host, useServerMount$, useStore } from '@builder.io/qwik';
import { findListsByBoard, getBoard } from './api';
import { Board, List } from './models';
import { TodoList } from './todo-list';

interface KanbanBoardState {
  current: Board | null;
  lists: List[];
}

export const KanbanBoard = component$(() => {
  const board = useStore<KanbanBoardState>({
    current: null,
    lists: []
  });

  useServerMount$(async () => {
    board.current = await getBoard();
    board.lists = await findListsByBoard(board.current);
  });

  return (
    <Host class="kanban-board">
      <h1>{board.current?.title}</h1>

      {board.lists.map(list => (
        <TodoList key={list.id} list={list}></TodoList>
      ))}
    </Host>
  );
});
