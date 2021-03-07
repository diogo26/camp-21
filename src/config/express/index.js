const express = require("express");
const app = express();
const { port } = require("../env");

app.set("port", port || 3000);

module.exports = app;
