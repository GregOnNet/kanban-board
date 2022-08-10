import { $, component$, Host, Resource, useResource$ } from '@builder.io/qwik'
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
  const resource = useResource$(() => {
    return findCardsByList(props.list)
  })

  const removeTodoFromList$ = $(async (card: Card) => {
    await removeCard(card)
  })

  const createCardFromDraft$ = $(async (cardDraft: CardDraft) => {
    await createCard(cardDraft)
  })

  return (
    <Host>
      <h3>{props.list.title}</h3>

      <KanbanBoardListCardForm
        list={props.list}
        onClickCreate$={async cardDraft =>
          await createCardFromDraft$(cardDraft)
        }
      ></KanbanBoardListCardForm>

      <Resource
        resource={resource}
        onPending={() => <div>Preparing your Board</div>}
        onRejected={reason => <div>Oops, {reason}</div>}
        onResolved={result => (
          <>
            {result.map(card => (
              <KanbanBoardListCard
                key={card.id}
                card={card}
                onClickRemove$={async cardForRemoval =>
                  await removeTodoFromList$(cardForRemoval)
                }
              ></KanbanBoardListCard>
            ))}
          </>
        )}
      ></Resource>
    </Host>
  )
})
