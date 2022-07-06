import { component$, Host, QRL } from '@builder.io/qwik';
import { Card } from './models';

export interface CardProps {
  card: Card;
  onClickRemoveQrl?: QRL<(card: Card) => void>;
}

export const TodoCard = component$(({ card, onClickRemoveQrl }: CardProps) => {
  return (
    <Host class="todo-card">
      {JSON.stringify(card)}
      <p>{card.text}</p>
      <small onClick$={async () => await onClickRemoveQrl?.invoke(card)}>
        DELETE
      </small>
    </Host>
  );
});
