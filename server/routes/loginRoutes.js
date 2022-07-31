const router = require("express").Router();

module.exports = (db) => {
  // all routes will go here
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    const command = "SELECT * FROM users WHERE email = $1";
    console.log(req.body);
    db.query(command, [email])
      .then((data) => {
        const user = data.rows[0];

        if (!user) {
          return res.status(400).send({ message: "User not found" });
        }

        if (!password) {
          return res.status(400).send({ message: "Incorrect password" });
        }

        req.session.user_id = user.id;
        return res.status(200).send({ ...user });
      })
      .catch((err) => {
        console.error("Error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/me", (req, res) => {
    const user_id = req.session.user_id;
    const command = "SELECT * FROM users WHERE id = $1";

    db.query(command, [user_id])
      .then((data) => {
        const user = data.rows[0];

        if (!user) {
          return res
            .status(400)
            .send({ message: "Username not found in database" });
        }

        return res.status(200).send({ ...user });
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;
};
