import {
  rand,
  randAirportName,
  randStatus,
  randTodo,
  randUuid
} from '@ngneat/falso';
import { Board, Card, List } from '../src/board/models';

const board: Board = { id: randUuid(), title: randAirportName() };

const lists: List[] = [
  { id: randUuid(), boardId: board.id, title: randStatus() },
  { id: randUuid(), boardId: board.id, title: randStatus() },
  { id: randUuid(), boardId: board.id, title: randStatus() }
];

const numberOfCards = 10;

const cards: Card[] = Array(numberOfCards)
  .fill(null)
  .map(() => ({
    id: randUuid(),
    listId: rand(lists).id,
    text: randTodo().title
  }));

export const db = {
  board,
  lists,
  cards
};
