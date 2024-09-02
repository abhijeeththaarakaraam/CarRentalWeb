const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false } // Add this field to differentiate admin users
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
