## Qwik Kanban

A playground to get familiar with Qwik.

```bash
# Install Dependencies
npm install

# Start API
npm run api:start

# Start App
npm run app:start
```

## Observations

> TODO: Reproduce each observation & file an issue.

- When API URL is wrong endless loop of request occurs.
- When using useMount$ instead of useServerMount the Lists get rendered twice.
- Mix and Match `useMount$` & `useServerMount$` leads to missing content.

## Issues

- [App works but server throws error](https://github.com/BuilderIO/qwik/issues/753)
  ```
  QWIK ERROR Error: server can not rerender
    at logError (/Users/gregor/workbench/projects/qwik-academy/kanban-playground/node_modules/@builder.io/qwik/server.cjs:175:52)
    at Object.raf (/Users/gregor/workbench/projects/qwik-academy/kanban-playground/node_modules/@builder.io/qwik/server.cjs:575:7)
    at renderMarked (/Users/gregor/workbench/projects/qwik-academy/kanban-playground/node_modules/@builder.io/qwik/core.cjs:3497:25)
  ```

## Whishes

- More ergonomics working with forms.
- Guide how to refetch data (Optimistic vs. Pessimistic UI).
