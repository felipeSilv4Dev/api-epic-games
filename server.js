const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
