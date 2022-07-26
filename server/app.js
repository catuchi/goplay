// declarations
require("dotenv").config();
const { ENVIRONMENT, PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

// db connection
const db = require("./configs/db.configs");

// routes import
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");

const app = express();
app.use(cors()); // CORS middleware usage

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

// routes
app.use("/users", userRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/register", registerRoutes(db));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
