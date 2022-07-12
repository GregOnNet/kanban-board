import { randUuid } from '@ngneat/falso';
import { Card, CardDraft, List } from '../models';

export async function createCard(cardDraft: CardDraft): Promise<Card[]> {
  const card: Card = { id: randUuid(), ...cardDraft }

  const response = await fetch(`http://localhost:3030/cards`, { method: 'POST', body: JSON.stringify(card), headers: { 'Content-Type': 'application/json' } });

  return await response.json();
}

export async function findCardsByList(list: List): Promise<Card[]> {
  const db = await fetch('http://localhost:3030/cards');
  const cards: Card[] = await db.json();

  const cardsOfList = cards.filter(card => card.listId === list.id);

  return cardsOfList;
}

export async function removeCard(cardForRemoval: Card): Promise<void> {
  await fetch(`http://localhost:3030/cards/${cardForRemoval.id}`, { method: 'DELETE' });
}
