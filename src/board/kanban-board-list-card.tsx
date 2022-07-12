import { component$, Host, QRL } from '@builder.io/qwik';
import { Card } from './models';

export interface CardProps {
  card: Card;
  onClickRemoveQrl?: QRL<(card: Card) => void>;
}

export const KanbanBoardListCard = component$(
  ({ card, onClickRemoveQrl }: CardProps) => {
    return (
      <Host class="card">
        <p>{card.text}</p>
        <button onClick$={async () => await onClickRemoveQrl?.invoke(card)}>
          DELETE
        </button>
      </Host>
    );
  }
);
