import { component$, Host, PropFunction, useStore } from '@builder.io/qwik'
import { CardDraft, List } from './models'

export interface CardProps {
  list: List
  onClickCreate$?: PropFunction<(card: CardDraft) => void>
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
      <button onClick$={async () => await props.onClickCreate$?.(cardDraft)}>
        Create
      </button>
    </Host>
  )
})
