// declarations
require("dotenv").config();
const { ENVIRONMENT, PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// db connection
const db = require("./configs/db.configs");

// routes import
const catsRoutes = require("./routes/catsRoutes");

const app = express();
app.use(cors()); // CORS middleware usage

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

// routes
app.use("/cats", catsRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
