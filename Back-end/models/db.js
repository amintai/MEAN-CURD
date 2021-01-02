let mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
    FirstName : { type : String},
    LastName : { type : String},
    Email : { type : String},
    Dob : { type : String},
    Bio : {type : String}
}) ;

module.exports = mongoose.model('employee', employeeSchema);