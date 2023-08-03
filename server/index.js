const dotenv = require("dotenv");
dotenv.config();
const corsMiddleware = require('./cors');
const cors = require("cors");
const express = require('express');
const session = require("express-session");

const AWS = require("aws-sdk")

const multer = require('multer');

require('./db/config');
const productSchema = require("./db/product")

const userSchema = require("./db/user");
const product = require("./db/product");
const orderSchema = require("./db/orders");
const user = require("./db/user");


const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(cors({
    origin: [`${process.env.NEXTJS_DOMAIN}`, 'http://localhost:3000']
    // You can also use an array of allowed origins:
    // origin: ['http://your-nextjs-app-domain', 'http://another-allowed-domain'],
}));

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: "secret"
}));


const awsConfig = {
    accessKeyId: `${process.env.ACCESSKEYID}`,
    secretAccessKey: `${process.env.SECRETACCESSKEY}`,
    region: `${process.env.REGION}`, // e.g., 'us-east-1'
};

const S3 = new AWS.S3(awsConfig);

let upload = multer({
    limits: 1204 * 1024 * 5,
    fileFilter: (req, file, done) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png")
            done(null, true)
        else
            done("FIle type not supported", false)
    },
})

const uploadTOs3 = (fileData) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: "ecommerce-bucket-aws",
            Key: `${Date.now().toString()}.jpg`,
            Body: fileData
        }

        S3.upload(params, (err, data) => {
            if (err) {
                console.warn(err)
                reject(err)
            }
            console.warn(data)
            return resolve(data)
        })
    })
}

app.post("/multipleUpload", upload.array("images", 3), (req, resp) => {
    console.warn(req.files)

    if (req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
            uploadTOs3(req.files[i].buffer).then((result) => {
                console.warn("uploaded image url", result.Location)
            })
        }
    }

    resp.json({
        msg: `${req.files.length} Images uploaded successfully`
    })
})




app.post("/upload", upload.single("image"), (req, resp) => {
    console.warn(req.file)

    if (req.file) {
        uploadTOs3(req.file.buffer).then((result) => {


            return resp.json({
                msg: "uploaded sucessfully",
                imageURl: result.Location,
            })
        }).catch((err) => {
            console.warn(err)
        })
    }
})









app.get("/", (req, resp) => {
    resp.send("api is working");
})

app.post("/login", async (req, resp) => {

    let result = await userSchema.findOne({
        username: req.body.userName,
        password: req.body.userPwd,
    })

    console.warn("user login " + result)
    if (result?.username == req.body.userName) {
        resp.send({
            userId: result._id,
            userRole: result.role,
            success: true,
            message: "user loged in ",
        }
        );
    }
    else {
        resp.send({
            success: false,
            message: "user not loged in ",
        }
        );
    }

})

app.post("/register", async (req, resp) => {
    let newUser = new userSchema({
        username: req.body.userName,
        password: req.body.userPwd,
        email: req.body.userRole,
        role: "user",
        cart: [],
    })
    let result = await newUser.save()
    console.warn("register result" + result)
    if (result.username == req.body.userName) {
        resp.send({
            success: true,
            message: "user registered",
        }
        );
    }
    else {
        resp.send({
            success: false,
            message: "user not registred",
        }
        );
    }
})

app.post("/addProduct", upload.single("image"), async (req, resp) => {
    console.warn("\n\n\n")
    // console.warn(req.file)
    console.warn("\n\n\n")

    if (req.file) {
        let uploadedImageObject = null;
        uploadedImageObject = await uploadTOs3(req.file.buffer).then((result) => {


            return {
                msg: "uploaded sucessfully",
                imageURl: result.Location,
            }
        }).catch((err) => {
            console.warn(err)
        })
        console.warn("uploadedImageObject" + uploadedImageObject.imageURl)

        if (uploadedImageObject?.imageURl != "") {
            let productData = JSON.parse(req.body?.productData);
            if (productData.productName) {
                let newProduct = new productSchema({
                    name: productData.productName,
                    description: productData.productDesc,
                    price: productData.productPrice,
                    catgory: productData.productCatg,
                    discount: 0,
                    imageURL: uploadedImageObject.imageURl,
                })
                let result = await newProduct.save()
                console.warn("product added successfully" + result)
                if (result.name == productData.productName) {
                    resp.send({
                        success: true,
                        message: "product added successfully",
                    }
                    );
                }
                else {
                    resp.send({
                        success: false,
                        message: "product not added . failed to upload product details",
                    }
                    );
                }
            }
            else {
                resp.send({
                    success: false,
                    message: "product not added . product details not found",
                })
            }

        }
        else {
            return resp.send({
                success: false,
                message: "product not added, failed to upload image"
            })
        }

    }



})

app.get("/getProduct", async (req, resp) => {
    let productData = await product.find();

    if (productData) {
        resp.send({
            success: true,
            message: "Product Fetched Successfully",
            productData,
        })
    }
    else {
        resp.send({
            success: false,
            message: "Product not Fetched ",
            productDat: [],
        })
    }
})
// app.post("/upload",async (req,resp)=>{
//     AWS.config.update({

//     })
// })


app.get("/getCart", async (req, resp) => {
    const userId = req.query?.userId;

    let result = await userSchema.findOne({ _id: userId }).populate('cart').select("cart");
    console.warn(result)
    if (result?._id == userId) {
        resp.send({
            success: true,
            message: "cart data fetched successfully",
            cartData: result
        })
    }
    else {

        resp.send({
            success: false,
            message: "failed to fetch cart data"
        })
    }


})

app.post("/addToCart", async (req, resp) => {
    let result = await userSchema.updateOne({ _id: req.body.userId },
        { $push: { cart: req.body.productId } }
    )

    // console.warn(result)

    if (result.acknowledged && result.modifiedCount >= 1) {
        resp.send({
            success: true,
            message: "Product added to cart",
        })
    }
    else {

        resp.send({
            success: false,
            message: "Product not  added to cart",
        })
    }

})

/////////////////////////////////////////////////////////////////////
//              EMAIl           //EMAIL



// Set your AWS credentials and region
AWS.config.update({
    accessKeyId: `${process.env.ACCESSKEYID}`,
    secretAccessKey: `${process.env.SECRETACCESSKEY}`,
    region: `${process.env.REGION}`, // e.g., 'us-east-1'
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const sendEmail = async (emailData) => {

    try {
        const senderEmail = `${process.env.EMAIL_ADDRESS}`; // Must be a verified email in AWS SES
        const recipientEmail = emailData.customerEmail;
        const subject = emailData.emailSubject;
        const body = emailData.emailBody;

        // Create the email message
        const emailParams = {
            Source: senderEmail,
            Destination: { ToAddresses: [recipientEmail] },
            Message: {
                Subject: { Data: subject },
                Body: { Text: { Data: body } },
            },
        };

        // Send the email
        const emailResult = await ses.sendEmail(emailParams).promise();
        console.log('Email sent:', emailResult);

        return emailResult;
    } catch (err) {
        console.error('Error sending email:', err);
        throw err;
    }


}



app.post("/placeOrder", async (req, resp) => {

    let newOrder = await orderSchema({
        userid: req.body.userId,

        products: req.body.product,
        orderEvent: {
            eventName: "Order Placecd",

            event_date: Date.now(),
        }
    })

    let result = await newOrder.save();

    console.warn("result of order place")
    console.warn(result)

    if (result?.userid == req?.body.userId) {
        let userData = await user.findOne({ _id: req.body.userId })
        console.warn("find one Data")
        console.warn(userData)

        let emailData = {
            emailBody: `Dear Custoemr,
                        ${userData.username} 
                        your order is placed successfully`,
            emailSubject: "Order Update",
            customerEmail: userData.email
        }
        await sendEmail(emailData)
        resp.send({
            success: true,
            message: "Order Placed successfully"
        })

    }
    else {
        resp.send({
            success: false,
            message: "failed to  Placed order"
        })

    }


})



//              EMAIl           //EMAIL

/////////////////////////////////////////////////////////////////////

app.listen(3001);