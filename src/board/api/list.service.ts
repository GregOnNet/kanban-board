import { Board, List } from '../models';

export async function findListsByBoard(board: Board): Promise<List[]> {
  const db = await fetch('http://localhost:3030/lists');
  const lists: List[] = await db.json();

  const listsOfBoard = lists.filter(list => list.boardId === board.id);

  return listsOfBoard;
}
