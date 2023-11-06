const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    role: String,
    email: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    }],
})

module.exports = mongoose.model("users", userSchema);