const mongoose= require("mongoose");

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    role:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    }],
})

module.exports = mongoose.model("users", userSchema);