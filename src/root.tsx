import { Board } from './board/board';

import './global.css';

export const Root = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Board</title>
      </head>
      <body>
        <Board />
      </body>
    </html>
  );
};
