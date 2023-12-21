const Hapi = require("@hapi/hapi");
const users_routes = require("./src/routes/users.js");
const contents_routes = require("./src/routes/contents.js");
const articles_routes = require("./src/routes/articles.js");
const myMiddleware = require("./src/middleware/logs.js");

const startServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
  });

  server.ext("onRequest", myMiddleware);
  server.route({
    method: "GET",
    path: "/",
    options: {
      auth: false,
    },
    handler: (request, h) => {
      return "Hello World!";
    },
  });
  const allRoutes = [users_routes, contents_routes, articles_routes];
  await server.register(require("hapi-auth-jwt2"));
  // Daftarkan setiap rute di server
  require("./src/auth/jwt.js")(server);
  allRoutes.forEach((route) => {
    server.route(route);
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

startServer();
