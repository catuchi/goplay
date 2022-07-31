const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here
  router.post("/", (req, res) => {
    req.session = null;
    res.redirect("http://localhost:3000/");
  });

  return router;
};
