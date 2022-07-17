import { component$, Host, PropFunction, useStore } from '@builder.io/qwik'
import { CardDraft, List } from './models'

export interface CardProps {
  list: List
  onClickCreate$?: PropFunction<(card: CardDraft) => void>
}

export const KanbanBoardListCardForm = component$((props: CardProps) => {
  const store: CardDraft = useStore({
    text: '',
    listId: props.list.id
  })

  return (
    <Host class="card">
      <input
        type="text"
        value={store.text}
        onKeyUp$={ev => (store.text = (ev.target as HTMLInputElement).value)}
      />
      <button onClick$={async () => await props.onClickCreate$?.(store)}>
        Create
      </button>
    </Host>
  )
})
