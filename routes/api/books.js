const router = require("express").Router();
const bookController = require("../../controller/bookController");

router.route("/")
  .get(bookController.findAll)
  .post(bookController.save);

router.route("/:id")
  .get(bookController.findOne)
  .delete(bookController.remove);

module.exports = router;