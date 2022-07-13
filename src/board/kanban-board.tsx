import { component$, Host, useMount$, useStore } from '@builder.io/qwik'
import { findListsByBoard, getBoard } from './api'
import { KanbanBoardList } from './kanban-board-list'
import { Board, List } from './models'

interface KanbanBoardState {
  current: Board | null
  lists: List[]
}

export const KanbanBoard = component$(() => {
  const board = useStore<KanbanBoardState>({
    current: null,
    lists: []
  })

  useMount$(async () => {
    board.current = await getBoard()
    board.lists = await findListsByBoard(board.current)
  })

  return (
    <Host>
      <h1>{board.current?.title}</h1>

      <div className="kanban-board__lists">
        {board.lists.map(list => (
          <KanbanBoardList key={list.id} list={list}></KanbanBoardList>
        ))}
      </div>
    </Host>
  )
})
