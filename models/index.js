// because we are exporting multiple objects at once, define module.exports as the object with keys for referrer to reference
// as index.js being the defaulted into file, export the other files as keys

module.exports = {
  Visitor: require("./visitor")
};
