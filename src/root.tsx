import { KanbanBoard } from './board/kanban-board';

import './global.css';

export const Root = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Board</title>
      </head>
      <body>
        <KanbanBoard />
      </body>
    </html>
  );
};
