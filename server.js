const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const port = process.env.port | 3000;

server.listen(port, () => {
    console.log(`NoteKeeper API is running on port ${port}..`);
});