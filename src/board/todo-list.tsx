import { $, component$, Host, useContext } from '@builder.io/qwik';
import { BoardTodosContext } from './BoardTodosContext';
import { TodoCard } from './todo-card';
import { Todo } from './todo.model';
import { todoGroup } from './todoGroup';

interface TodoListProps {
  heading: string;
  group: todoGroup;
}

export const TodoList = component$((props: TodoListProps) => {
  const boardTodos = useContext(BoardTodosContext);

  const removeTodoFromList = $((todo: Todo) => {
    boardTodos[props.group] = boardTodos[props.group].filter(
      entry => entry?.id !== todo.id
    );
  });

  return (
    <Host>
      <h3>{props.heading}</h3>
      {boardTodos[props.group].map(todo => (
        <TodoCard
          todo={todo}
          onClickRemove$={async () => await removeTodoFromList.invoke(todo)}
        ></TodoCard>
      ))}
    </Host>
  );
});
