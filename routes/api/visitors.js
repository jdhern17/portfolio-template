// create router object piece to work on
const router = require("express").Router();

// identify the location of the controllers to which to route
const visitorsController = require("../../controllers/visitorsController");

// for controller work that is not user-specific, paths envoked will not contain id specificity, thereby matching with "/"
router
  .route("/")
  .get(visitorsController.findAll)
  .post(visitorsController.create);

// for controller work that is user-specific, id will need to be part of the envoked path
router
  .route("/:id")
  .get(visitorsController.findById)
  .put(visitorsController.update)
  .delete(visitorsController.remove);

// export configured router piece
module.exports = router;
