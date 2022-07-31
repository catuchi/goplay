const e = require("express");

const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here

  router.get("/", (req, res) => {
    const user_id = req.session.user_id;
    db.query(
      `
      SELECT *
      FROM users
      WHERE user_id = $1
    `,
      [user_id]
    )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => console.log("error: ", err));
  });

  router.post("/", (req, res) => {
    console.log(req.body);
    const { first_name, last_name, email, password } = req.body;
    const command = `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)`;
    db.query(command, [first_name, last_name, email, password])
      .then((data) => {
        return res.status(200).send();
      })
      .catch((err) => console.log("error", err));
  });

  return router;
};
