require('./config');
const userSchema = require("./user");
const product = require("./product");
const orderSchema = require("./orders");
const user = require("./user");

async function loginFindOne(req, resp) {

    try {
        let result = await userSchema.findOne({
            username: req.body.userName,
            password: req.body.userPwd,
        })

        return result
    } catch (error) {
        console.warn("error from loginFind Mongodb", error);
    }

}

async function registerSave(req, resp) {
    try {
        let newUser = new userSchema({
            username: req.body.userName,
            password: req.body.userPwd,
            email: req.body.userRole,
            role: "user",
            cart: [],
        })
        let result = await newUser.save()
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function productFind(req, resp) {
    try {
        let result = await product.find();
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function productFindWithId(recommendations) {
    try {
        let result = await product.find({ _id: { $in: recommendations } });
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function cartFindOne(req, resp) {
    try {
        const userId = req.query?.userId;
        let result = await userSchema.findOne({ _id: userId }).populate('cart').select("cart");
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function cartUpdateOne(req, resp) {
    try {
        let result = await userSchema.updateOne({ _id: req.body.userId },
            { $push: { cart: req.body.productId } }
        )
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function orderSave(req, resp) {
    try {
        let newOrder = await orderSchema({
            userid: req.body.userId,

            products: req.body.product,
            orderEvent: {
                eventName: "Order Placecd",

                event_date: Date.now(),
            }
        })

        let result = await newOrder.save();

        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function userFindOne(req, resp) {
    try {
        let result = await user.findOne({ _id: req.body.userId });
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

async function orderFind(req, resp) {
    try {
        let result = await orderSchema.find().populate('products');
        return result
    } catch (error) {
        console.warn("error from registersave Mongodb", error);
    }

}

module.exports = {
    loginFindOne,
    registerSave,
    productFind,
    productFindWithId,
    cartFindOne,
    cartUpdateOne,
    orderSave,
    userFindOne,
    orderFind,

}