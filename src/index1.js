const Hapi = require("@hapi/hapi");
const users_routes = require("./routes/users.js");
const myMiddleware = require("./middleware/logs.js");
const mysql = require("mysql2");
const init = async () => {
  const db_pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "culturama",
  });

  const server = Hapi.server({
    port: 4000,
    host: "localhost",
  });
  //server.ext("onRequest", myMiddleware);

  server.route({
    method: "GET",
    path: "/users",
    handler: (request, h) => {
      return new Promise((resolve, reject) => {
        db_pool.query("SELECT * FROM user", (err, rows) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(rows);
          }
        });
      });
    },
  });

  //server.route(users_routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
//   await server.register({
//     plugin: users_routes,
//   });
