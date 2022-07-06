import { Board, List } from '../models';

export async function findListsByBoard(board: Board): Promise<List[]> {
  const db = await fetch('http://localhost:3000/public/db.json');
  const body = await db.json();
  const lists: List[] = body.lists;

  const listsOfBoard = lists.filter(list => list.boardId === board.id);

  return Promise.resolve(listsOfBoard);
}
