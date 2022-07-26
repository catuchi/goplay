const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here
  router.get("/:id", (req, res) => {
    const command = "SELECT * FROM users WHERE ID = $1";
    db.query(command, [req.params.id]).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/:id/locations", (req, res) => {
    const command = "SELECT * FROM saved_locations WHERE user_id = $1";
    db.query(command, [req.params.id]).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/:id/locations", (req, res) => {
    const command =
      "INSERT INTO saved_locations (arena_uuid, user_id) VALUES ($1, $2)";
    db.query(command, [req.body.arena_uui, req.params.id]).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
