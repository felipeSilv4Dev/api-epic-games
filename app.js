const express = require("express");
const gamesRouter = require("./router/gamesRouter");
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use("/api/v1/epic-games", gamesRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Essa rota não existe! 💥",
  });
});
module.exports = app;
