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
