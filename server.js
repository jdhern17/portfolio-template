// define packages
const express = require("express");
const path = require("path");
require("dotenv").config();
const contentful = require("contentful");

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("/content", function (req, res) {
  client
    .getEntries()
    .then((response) => {
      res.json(response.items);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });
// if (process.env.NODE_ENV === "production") {
// app.use(express.static("client/build"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// }

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// else {
// app.use(express.static(path.join(__dirname, '/client/public')));

// }

//   try {
//     const response = await client.getEntries();
//     return {
//         headers,
//         statusCode: 200,
//         body: JSON.stringify(response.items, null, 2),
//     };
// } catch (ex) {
//     return {
//         headers,
//         statusCode: 500,
//         body: ex.message,
//     };
// }
