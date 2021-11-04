// require node path
// per w3schools: The Path module provides a way of working with directories and file paths
const path = require("path");

//creates a new router object
const router = require("express").Router();

// pulls in api controller routes defined within the api subdirectory
const apiRoutes = require("./api");

// applies the api routes from the api folder to the router instantiated when the /api endpoint is hit
router.use("/api", apiRoutes);

// if no api routes are hit, send the react app
// MOVED TO SERVER CATCHALL
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// export router with api routes and html routes
module.exports = router;
