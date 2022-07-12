import { component$, Host, QRL, useStore } from '@builder.io/qwik'
import { CardDraft, List } from './models'

export interface CardProps {
  list: List
  onClickCreateQrl?: QRL<(card: CardDraft) => void>
}

export const KanbanBoardListCardForm = component$((props: CardProps) => {
  const cardDraft: CardDraft = useStore({
    text: '',
    listId: props.list.id
  })

  return (
    <Host class="card">
      <input
        type="text"
        value={cardDraft.text}
        onKeyUp$={ev =>
          (cardDraft.text = (ev.target as HTMLInputElement).value)
        }
      />
      <button
        onClick$={async () => await props.onClickCreateQrl?.invoke(cardDraft)}
      >
        Create
      </button>
    </Host>
  )
})
