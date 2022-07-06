import { Board } from '../models';

export async function getBoard(): Promise<Board> {
  const db = await fetch('http://localhost:3000/public/db.json');
  const body = await db.json();

  return body.board;
}
