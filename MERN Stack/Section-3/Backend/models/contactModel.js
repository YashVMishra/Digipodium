// defines the structure of the user details
// defines the details field.

// schema is class and model is a function.
const {model, Schema} = require('../connection');

const mySchema = new Schema({
    username : String,
    email : String,
    title : String,
    description : String
});

// collection name inside the DB.
module.exports = model('contact', mySchema);