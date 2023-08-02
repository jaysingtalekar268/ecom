const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    discount: Number,
    catgory: String,
    imageURL:String,
    
});

module.exports = mongoose.model("products", productSchema);