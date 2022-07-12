import { Board } from '../models';

export async function getBoard(): Promise<Board> {
  const db = await fetch('http://localhost:3030/board');
  const board: Board = await db.json();

  return board;
}
