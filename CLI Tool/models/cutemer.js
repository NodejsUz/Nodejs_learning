const mongose = require("mongoose");

const customerSchema = mongose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String},
    email: {type: String}
})

// mongose.set("strictQuery", true)

module.exports = mongose.model("custom", customerSchema);