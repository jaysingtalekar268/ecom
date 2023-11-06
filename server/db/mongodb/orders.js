const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    orderEvent: [
        {
            eventName: String,

            event_date: Date
        }],
})

module.exports = mongoose.model("orders", orderSchema);