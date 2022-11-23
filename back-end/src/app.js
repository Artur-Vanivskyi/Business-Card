const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const businesscardRouter = require("./businesscard/businesscard.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/businesscards", businesscardRouter);




app.use(errorHandler);
app.use(notFound);


module.exports = app;