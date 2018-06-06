var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    userFullName: {type: String, required: true},
    userID: {type: Number, required: true, unique: true},
    userPassword: {type: String, required: true},
    userEmail: {type: String, required: true, unique: true},
    achievedCredits: {type: Number, required: true},
    registeredCredits: {type: Number, required: true},
    cummulativeGpa: {type: Number, required: true},
    semesterGpa: {type: Number, required: true},
    ukGpa: {type: Number, required: true},
    // campaigns: [{type: Schema.Types.ObjectId, ref: 'Campaign'}]
});
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);