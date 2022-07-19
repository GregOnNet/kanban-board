import {
  component$,
  Host,
  Resource,
  useResource$,
  useStore
} from '@builder.io/qwik'
import { randUuid } from '@ngneat/falso'
import { findListsByBoard, getBoard } from './api'
import { KanbanBoardList } from './kanban-board-list'
import { Board, List } from './models'

interface KanbanBoardState {
  board: Board | null
  lists: List[]
}

export const KanbanBoard = component$(() => {
  const store = useStore({
    trigger: randUuid()
  })

  const resource = useResource$<KanbanBoardState>(async ({ track }) => {
    track(store, 'trigger')

    const board = await getBoard()
    const lists = await findListsByBoard(board)

    return { board, lists }
  })

  return (
    <Host>
      <button onClick$={() => (store.trigger = randUuid())}>Reload</button>

      <Resource
        resource={resource}
        onPending={() => <div>Preparing your Board</div>}
        onRejected={reason => <div>Oops, {reason}</div>}
        onResolved={result => {
          return (
            <>
              <h1>{result.board?.title}</h1>

              <div className="kanban-board__lists">
                {result.lists.map(list => (
                  <KanbanBoardList key={list.id} list={list}></KanbanBoardList>
                ))}
              </div>
            </>
          )
        }}
      ></Resource>
    </Host>
  )
})
