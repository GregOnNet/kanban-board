import { Card, List } from '../models';
import { db } from './db';

export async function findCardsByList(list: List): Promise<Card[]> {
  const db = await fetch('http://localhost:3000/public/db.json');
  const body = await db.json();
  const cards: Card[] = body.cards;

  const cardsOfList = cards.filter(card => card.listId === list.id);

  return Promise.resolve(cardsOfList);
}

export function removeCard(cardForRemoval: Card): Promise<void> {
  db.cards = db.cards.filter(card => card.id !== cardForRemoval.id);

  return Promise.resolve();
}
