import {
  $,
  component$,
  Host,
  useServerMount$,
  useStore
} from '@builder.io/qwik';
import { findCardsByList, removeCard } from './api';
import { KanbanBoardListCard } from './kanban-board-list-card';
import { Card, List } from './models';

interface KanbanListState {
  cards: Card[];
}

interface KanbanListProps {
  list: List;
}

export const KanbanBoardList = component$((props: KanbanListProps) => {
  const store = useStore<KanbanListState>({
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
        <KanbanBoardListCard
          key={card.id}
          card={card}
          onClickRemove$={async cardForRemoval =>
            await removeTodoFromList.invoke(cardForRemoval)
          }
        ></KanbanBoardListCard>
      ))}
    </Host>
  );
});
