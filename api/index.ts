import path from "path";

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = 3030;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});