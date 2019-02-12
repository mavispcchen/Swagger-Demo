const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: String,
    name: String,
    gender: String
});

module.exports = mongoose.model('User', userSchema);
