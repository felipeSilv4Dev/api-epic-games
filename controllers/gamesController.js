const fs = require("fs");

const Games = JSON.parse(
  fs.readFileSync(`${__dirname}/./../epic-games.json`, "utf-8")
);

exports.getAllGames = async (req, res, next) => {
  try {
    const games = await Games;

    res.status(200).json({
      status: "success",
      result: games.length,
      data: games,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getGame = async (req, res, next) => {
  try {
    const games = await Games;
    const game = games.find((game) => game.id === req.params.id);

    if (!req.params.id || !game) throw new Error("Jogo não encontrado! 💥");

    res.status(200).json({
      status: "success",
      data: game,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
