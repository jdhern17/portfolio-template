// create router instance to work on in order to export
const router = require("express").Router();
const visitorRoutes = require("./visitors");

// tell the created router which file/router to apply when defined endpoint is visited
router.use("/visitors", visitorRoutes);

// export configured router piece/module
module.exports = router;
