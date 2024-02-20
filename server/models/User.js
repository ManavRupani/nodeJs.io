const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    Usernmae: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User',UserSchema);