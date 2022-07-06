import {
  $,
  component$,
  Host,
  useServerMount$,
  useStore
} from '@builder.io/qwik';
import { findCardsByList, removeCard } from './api';
import { Card, List } from './models';
import { TodoCard } from './todo-card';

interface ListState {
  cards: Card[];
}

interface ListProps {
  list: List;
}

export const TodoList = component$((props: ListProps) => {
  const store = useStore<ListState>({
    cards: []
  });

  useServerMount$(async () => {
    store.cards = await findCardsByList(props.list);
  });

  const removeTodoFromList = $(async (card: Card) => {
    await removeCard(card);
  });

  return (
    <Host>
      <h3>{props.list.title}</h3>
      {store.cards.map(card => (
        <TodoCard
          key={card.id}
          card={card}
          onClickRemove$={async cardForRemoval =>
            await removeTodoFromList.invoke(cardForRemoval)
          }
        ></TodoCard>
      ))}
    </Host>
  );
});
