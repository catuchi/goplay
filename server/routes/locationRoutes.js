const router = require("express").Router();

module.exports = (db) => {
  // shares a location
  router.post("/shared", (req, res) => {
    // const {location}
  });

  // saves a location to the user's saved locations
  router.post("/saved", (req, res) => {
    const { arena_uuid, user } = req.body;
    const command =
      "INSERT INTO saved_locations (arena_uuid, user_id) VALUES (S1, S2)";

    db.query(command, [arena_uuid, user])
      .then((data) => {
        return res.status(200).send();
      })
      .catch((err) => console.log("error", err));
  });

  // deletes a job from the user's saved jobs
  router.post("/saved/delete/:locationid", (req, res) => {
    const locationId = req.params.locationid;
    const command = "DELETE FROM saved_locations WHERE id = $1";

    db.query(command, [locationId])
      .then((data) => {
        return res.status(200).send();
      })
      .catch((err) => console.log("error", err));
  });

  router.post("/delete/:unique_location_id", (req, res) => {
    const unique_location_id = req.params.unique_location_id;
    const command = "DELETE FROM saved_locations WHERE unique_location_id = $1";

    db.query(command, [unique_location_id])
      .then(() => {
        console.log("deleted");
      })
      .catch((err) => console.log("error", err));
  });

  // retrieves all the locations saved by a user
  router.get("/saved", (req, res) => {
    const user_id = req.session.user_id;
    const command = "SELECT * FROM saved_locations WHERE user_id = $1";

    db.query(command, [user_id])
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => console.log("error: ", err));
  });

  return router;
};
