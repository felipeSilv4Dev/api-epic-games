exports.getAllGames = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      data: "barbie brahma",
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
    res.status(200).json({
      status: "success",
      data: "barbie brahma for id",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
