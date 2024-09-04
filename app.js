const express = require("express");
const gamesRouter = require("./router/gamesRouter");
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/epic-games", gamesRouter);
module.exports = app;
