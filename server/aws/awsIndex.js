const AWS = require("aws-sdk")
const multer = require('multer');

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
            Bucket: `${process.env.BUCKET}`,
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

const sendEmail = async (emailData) => {
    try {// Set your AWS credentials and region
        AWS.config.update({
            accessKeyId: `${process.env.ACCESSKEYID}`,
            secretAccessKey: `${process.env.SECRETACCESSKEY}`,
            region: `${process.env.REGION}`, // e.g., 'us-east-1'
        });
        const ses = new AWS.SES({ apiVersion: '2010-12-01' });
        const senderEmail = `${process.env.EMAIL_ADDRESS}`; // Must be a verified email in AWS SES
        const recipientEmail = emailData.customerEmail;
        // const recipientEmail = "";
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

module.exports = {
    upload,
    uploadTOs3,
    sendEmail
}