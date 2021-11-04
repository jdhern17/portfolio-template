// bring in mongoose package
const mongoose = require("mongoose");

// bring in the Schema constructor from mongoose
const Schema = mongoose.Schema;

// construct an instance of the Schema constructor
const visitorSchema = new Schema({
  whoAmI: { type: String, required: true },
  whatBroughtMeHere: { type: String, required: true },
  emailOrContact: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

// create variable to access the new schema
// per mongoose documentation: The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name.
// side note: because we are using express the access mongo via api, we do not need to instantiate it with the instance practice, rather we will use the create() function which triggers the save() middleware
const Visitor = mongoose.model("Visitor", visitorSchema);

// allow access to model
module.exports = Visitor;
