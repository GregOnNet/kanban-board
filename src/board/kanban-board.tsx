import { component$, Host, useServerMount$, useStore } from '@builder.io/qwik'
import { findListsByBoard, getBoard } from './api'
import { KanbanBoardList } from './kanban-board-list'
import { Board, List } from './models'

interface KanbanBoardState {
  current: Board | null
  lists: List[]
}

export const KanbanBoard = component$(() => {
  const store = useStore<KanbanBoardState>({
    current: null,
    lists: []
  })

  useServerMount$(async () => {
    store.current = await getBoard()
    store.lists = await findListsByBoard(store.current)
  })

  return (
    <Host>
      <h1>{store.current?.title}</h1>

      <div className="kanban-board__lists">
        {store.lists.map(list => (
          <KanbanBoardList key={list.id} list={list}></KanbanBoardList>
        ))}
      </div>
    </Host>
  )
})
