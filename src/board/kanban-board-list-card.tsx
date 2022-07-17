import { component$, Host, PropFunction } from '@builder.io/qwik'
import { Card } from './models'

export interface CardProps {
  card: Card
  onClickRemove$?: PropFunction<(card: Card) => void>
}

export const KanbanBoardListCard = component$((props: CardProps) => {
  return (
    <Host class="card">
      <p>{props.card.text}</p>
      <button onClick$={async () => await props.onClickRemove$?.(props.card)}>
        DELETE
      </button>
    </Host>
  )
})
