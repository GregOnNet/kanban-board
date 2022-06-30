import { $, component$, Host, QRL } from '@builder.io/qwik';
import { TodoCard } from './todo-card';
import { Todo } from './todo.model';

interface TodoListProps {
  heading: string;
  store: { entities: Todo[] };
  onTodoRemoveQrl?: QRL<(todo: Todo) => void>;
}

export const TodoList = component$((props: TodoListProps) => {
  const removeTodoFromList = $((todo: Todo) => {
    props.store.entities = props.store.entities.filter(
      entry => entry?.id !== todo.id
    );
  });

  return (
    <Host>
      <h3>{props.heading}</h3>
      {props.store.entities.map(todo => (
        <TodoCard
          todo={todo}
          onClickRemove$={async () => await removeTodoFromList.invoke(todo)}
        ></TodoCard>
      ))}
    </Host>
  );
});
