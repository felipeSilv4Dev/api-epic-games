const express = require("express");
const gamesRouter = require("./router/gamesRouter");
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/epic-games", gamesRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Essa rota não existe! 💥",
  });
});
module.exports = app;
