const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require('express');
const session = require("express-session");

// const AWS = require("aws-sdk")

// const multer = require('multer');

const productSchema = require("./db/mongodb/product")

// const userSchema = require("./db/mongodb/user");
// const product = require("./db/mongodb/product");
// const orderSchema = require("./db/mongodb/orders");
// const user = require("./db/mongodb/user");
const { loginFindOne,
    registerSave,
    productFind,
    cartFindOne,
    cartUpdateOne,
    orderSave,
    userFindOne,
    orderFind,
    productFindWithId } = require("./db/mongodb/mongoDb")

const { productSelect,
    viewInsert,
    getTestData,
} = require("./db/cassandra/cassandra");


// //casandra //
// const { v4: uuidv4 } = require('uuid');
// const newUuid = uuidv4();

const cassandraObject = require("./db/cassandra/cassandra_connect")

//casandra //

//cloudkafka  //

const { produceMessage } = require("./db/kafka/kafkaProducer");
// const { runConsumer } = require("./db/kafka/kafkaConsumer");
const { upload, uploadTOs3, sendEmail } = require("./aws/awsIndex");
const { getKafkaConsumer } = require("./db/kafka/kafka");

//cloudkafka  //


const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: "secret"
}));


// const awsConfig = {
//     accessKeyId: `${process.env.ACCESSKEYID}`,
//     secretAccessKey: `${process.env.SECRETACCESSKEY}`,
//     region: `${process.env.REGION}`, // e.g., 'us-east-1'
// };

// const S3 = new AWS.S3(awsConfig);

// let upload = multer({
//     limits: 1204 * 1024 * 5,
//     fileFilter: (req, file, done) => {
//         if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png")
//             done(null, true)
//         else
//             done("FIle type not supported", false)
//     },
// })

// const uploadTOs3 = (fileData) => {
//     return new Promise((resolve, reject) => {
//         const params = {
//             Bucket: `${process.env.BUCKET}`,
//             Key: `${Date.now().toString()}.jpg`,
//             Body: fileData
//         }

//         S3.upload(params, (err, data) => {
//             if (err) {
//                 console.warn(err)
//                 reject(err)
//             }
//             console.warn(data)
//             return resolve(data)
//         })
//     })
// }

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
    let result = await loginFindOne(req, resp);
    console.warn("user login " + result)
    if (result?.username == req.body.userName) {
        resp.send({
            userId: result._id,
            userRole: result.role,
            success: true,
            message: "user loged in ",
        });
    }
    else {
        resp.send({
            success: false,
            message: "user not loged in ",
        });
    }
})

app.post("/register", async (req, resp) => {
    let result = await registerSave(req, resp);
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


    if (req.file) {
        let uploadedImageObject = null;      // this is done to direcyly add  product url to database

        uploadedImageObject = await uploadTOs3(req.file.buffer).then((result) => {


            return {
                msg: "uploaded sucessfully",
                imageURl: result.Location,
            }
        }).catch((err) => {
            console.warn(err)
        })
        console.warn("uploadedImageObject" + uploadedImageObject.imageURl)
        // this is done to direcyly add  product url to database


        if (uploadedImageObject?.imageURl != "") {
            // if (true || uploadedImageObject?.imageURl != "") {      // this is done to direcyly add  product url to database
            let productData = JSON.parse(req.body?.productData);
            if (productData.productName) {
                let newProduct = new productSchema({
                    name: productData.productName,
                    description: productData.productDesc,
                    price: productData.productPrice,
                    catgory: productData.productCatg,
                    discount: 0,
                    imageURL: uploadedImageObject.imageURl,     
                    // imageURL: productData.productURL, // this is  dont to directly add image url into databse for that product
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
    let productData = await productFind(req, resp)
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
    let result = await cartFindOne(req, resp)
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
    let result = await cartUpdateOne(req, resp);
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
// AWS.config.update({
//     accessKeyId: `${process.env.ACCESSKEYID}`,
//     secretAccessKey: `${process.env.SECRETACCESSKEY}`,
//     region: `${process.env.REGION}`, // e.g., 'us-east-1'
// });

// const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// const sendEmail = async (emailData) => {

//     try {
//         const senderEmail = `${process.env.EMAIL_ADDRESS}`; // Must be a verified email in AWS SES
//         const recipientEmail = emailData.customerEmail;
//         // const recipientEmail = "";
//         const subject = emailData.emailSubject;
//         const body = emailData.emailBody;

//         // Create the email message
//         const emailParams = {
//             Source: senderEmail,
//             Destination: { ToAddresses: [recipientEmail] },
//             Message: {
//                 Subject: { Data: subject },
//                 Body: { Text: { Data: body } },
//             },
//         };

//         // Send the email
//         const emailResult = await ses.sendEmail(emailParams).promise();
//         console.log('Email sent:', emailResult);

//         return emailResult;
//     } catch (err) {
//         console.error('Error sending email:', err);
//         throw err;
//     }


// }



app.post("/placeOrder", async (req, resp) => {
    let result = await orderSave(req, resp);
    console.warn("result of order place")
    console.warn(result)

    if (result?.userid == req?.body.userId) {
        let userData = await userFindOne(req, resp);
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

app.get("/getOrders", async (req, resp) => {
    let result = await orderFind(req, resp);
    if (result.length >= 1) {
        return resp.send({
            success: true,
            message: "Orders fetched successfully",
            orderData: result
        })
    } else {
        return resp.send({
            success: false,
            message: "Failed to get Orders",
            orderData: result
        })
    }
})

async function getRecommondedProduct(recommendations) {
    let productData = await productFindWithId(recommendations);
    if (productData) {
        console.warn("\ngetRecommondedProduct ", productData);
        return productData;
    }
    else {
        console.warn("\nerror getRecommondedProduct ", productData);
        return false;
    }
}

//              EMAIl           //EMAIL


//simple recommodation algorithm 
function generateProductRecommendations(viewedProducts, purchasedProducts) {
    // Implement collaborative filtering logic (simplest form: recommend viewed products not purchased)
    const recommendations = viewedProducts.filter(product => !purchasedProducts.includes(product));
    return recommendations;
}

app.get("/getRecommendation", async (req, resp) => {
    const userId = req.query.userId;

    if (userId) {
        try {
            const [viewedProducts, purchasedProducts] = await getUserInteractions(userId)

            let recommendations = generateProductRecommendations(viewedProducts, purchasedProducts);
            recommendations = [...new Set(recommendations)];
            console.warn("\nrecommdation for user", userId, " ", recommendations)
            recommendations = await getRecommondedProduct(recommendations);
            return resp.send({
                success: true,
                recommendations,
                message: "recommdation is succssfully loaded",
            })
        } catch (error) {
            return resp.send({
                success: false,
                message: "Failed to load recommodation",
            })
        }
    } else {
        return resp.send({
            success: false,
            message: "userId is missing",
        })
    }
})



//simple recommodation algorithm 


//cloudkafka  //

app.post("/kafkaProduce", async (req, resp) => {
    const topic = req.body.topic;
    const message = req.body.message;
    // let message = { userId: "654654", productId: "65654" };
    // message = JSON.stringify(message)
    await produceMessage(topic, message);

    resp.send("Message sent to Kafka!");
})

// async function getKafkaConsumer() {

//     runConsumer("test", ({ topic, partition, message }) => {
//         console.log(`\nReceived message from topic ${topic}, partition ${partition}: ${message.value.toString()}`);
//         message = JSON.parse(message.value.toString())

//         // addProductViewData(message)
//         console.warn("\nmessage value", JSON.parse(message.value.toString()).userId)

//     }).catch(error => {
//         console.error('\nError in Kafka consumer:', error);
//     });


// }

app.get("/kafkaConsume", (req, resp) => {
    // Call the runConsumer function from kafkaConsumer.js
    getKafkaConsumer();
    resp.send("Started consuming messages from Kafka!");
});
//cloudkafka  //



//casandra //


async function getUserInteractions(userId) {
    // const cassandraClient = (await cassandraObject());

    // const queryViews = `SELECT productid FROM ${process.env.CASANDRA_KEYSPACE}.user_views WHERE user_id = ? ALLOW FILTERING`;
    // const queryPurchases = `SELECT productid FROM ${process.env.CASANDRA_KEYSPACE}.user_purchases WHERE user_id = ? ALLOW FILTERING`;

    // const [viewsResult, purchasesResult] = await Promise.all([
    //     cassandraClient.execute(queryViews, [userId]),
    //     cassandraClient.execute(queryPurchases, [userId])
    // ]);

    const [viewsResult, purchasesResult] = await productSelect(userId);

    const viewedProducts = viewsResult.rows.map(row => row.productid);
    const purchasedProducts = purchasesResult.rows.map(row => row.productid);
    console.warn("\n select result viewedProducts ", viewedProducts);
    console.warn("\n select result purchasedProducts", purchasedProducts);
    return [viewedProducts, purchasedProducts];
}



// async function addProductViewData(message) {
//     if (message?.userId && message?.productId) {
//         // const cassandraClient = (await cassandraObject());
//         // // console.log(`Your cluster returned ${rs.columns.map(el=>el.name)} row(s)`);
//         // const query = `INSERT INTO ${process.env.CASANDRA_KEYSPACE}.user_views(data_id,timestamp,user_id,productId) values (?, ?,?,?)`;
//         // const params = [newUuid, Date.now(), message.userId, message.productId];

//         // cassandraClient.execute(query, params, { prepare: true }, (err, result) => {
//         //     if (err) {
//         //         console.error('\nError inserting data:', err);
//         //     } else {
//         //         console.log('\nData inserted successfully:', result);
//         //     }
//         // });

//         await viewInsert(message);

//     } else {
//         console.warn("\n invalid  userId ", message?.userId, " productId ", message?.productId);
//     }

// }

// async function getTestData() {
//     const cassandraClient = (await cassandraObject());
//     const rs = await cassandraClient.execute("SELECT * FROM system.local");
//     // console.log(`Your cluster returned ${rs.columns.map(el=>el.name)} row(s)`);

//     const query = 'SELECT * FROM ecom.test_table';
//     try {
//         const result = await cassandraClient.execute(query);
//         console.warn("\n", result.columns.map(el => el.name))
//         console.warn("\n", result.rows)
//         return result.rows;
//     } catch (error) {
//         console.error('\nError retrieving user history from Cassandra:', error);
//         return [];
//     }


// }

//casandra //

app.get("/cassandraTest", (req, resp) => {
    resp.send("its not yet developed")
});

// getTestData();
try {
    getKafkaConsumer();

} catch (error) {
    console.warn("getKafkaConsumer error ", error)
}

app.listen(3001);