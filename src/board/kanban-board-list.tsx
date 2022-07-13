import { $, component$, Host, useMount$, useStore } from '@builder.io/qwik'
import { createCard, findCardsByList, removeCard } from './api'
import { KanbanBoardListCard } from './kanban-board-list-card'
import { KanbanBoardListCardForm } from './kanban-board-list-card-form'
import { Card, CardDraft, List } from './models'

interface KanbanListState {
  cards: Card[]
}

interface KanbanListProps {
  list: List
}

export const KanbanBoardList = component$((props: KanbanListProps) => {
  const store = useStore<KanbanListState>({
    cards: []
  })

  useMount$(async () => {
    store.cards = await findCardsByList(props.list)
  })

  const removeTodoFromList = $(async (card: Card) => {
    await removeCard(card)
  })

  const createCardFromDraft = $(async (cardDraft: CardDraft) => {
    await createCard(cardDraft)
  })

  return (
    <Host>
      <h3>{props.list.title}</h3>

      <KanbanBoardListCardForm
        list={props.list}
        onClickCreate$={async cardDraft =>
          await createCardFromDraft.invoke(cardDraft)
        }
      ></KanbanBoardListCardForm>

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
  )
})
