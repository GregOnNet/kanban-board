import { component$, Host, PropFunction } from '@builder.io/qwik'
import { Card } from './models'

export interface CardProps {
  card: Card
  onClickRemove$?: PropFunction<(card: Card) => void>
}

export const KanbanBoardListCard = component$(
  ({ card, onClickRemove$ }: CardProps) => {
    return (
      <Host class="card">
        <p>{card.text}</p>
        <button onClick$={async () => await onClickRemove$?.(card)}>
          DELETE
        </button>
      </Host>
    )
  }
)
