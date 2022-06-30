import { component$, Host, QRL } from '@builder.io/qwik';
import { Todo } from './todo.model';

export interface TodoCardProps {
  todo: Todo;
  onClickRemoveQrl?: QRL<() => void>;
}

export const TodoCard = component$(
  ({ todo, onClickRemoveQrl }: TodoCardProps) => {
    return (
      <Host class="todo-card">
        <p>{todo.text}</p>
        <small onClickQrl={onClickRemoveQrl}>DELETE</small>
      </Host>
    );
  }
);
