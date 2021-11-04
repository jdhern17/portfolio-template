// define packages
const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");

//pull in routes from routes folder (from index file directed to files within api folder)
const routes = require("./routes");

// instantiate express objects
const app = express();

// define middleware behavior for parsing requests
// extended adds features for "json-like experience" per express documentation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// pulls router.Router() from index of routes folder and applies to instantiated app object
app.use(routes);

// define behavior for serving assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}


// connect to the mongo db
// per mongo documentation: if the port number is not specified, the default port 27017 is used
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mr-dhzj", {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// start the express api server
// callback function defined as the console.log that triggers given a successful definition of PORT variable
// identify port as defined by node global variable process.env where if defined use if not define as 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
