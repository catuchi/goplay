const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here
  router.post("/register", (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    const command =
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)";

    db.query(command, [first_name, last_name, email, password])
      .then((res) => {
        res.send(200);
      })
      .catch((err) => console.log("error", err));
  });

  return router;
};
