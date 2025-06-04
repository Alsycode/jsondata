const jsonServer = require('json-server');
   const server = jsonServer.create();
   const router = jsonServer.router('db.json');
   const middlewares = jsonServer.defaults();

   server.use(middlewares);
   server.use(router);

   const port = process.env.PORT || 6000;
   server.listen(port, '0.0.0.0', () => {
     console.log(`JSON Server is running on http://0.0.0.0:${port}`);
   });