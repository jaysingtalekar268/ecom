const dotenv = require("dotenv");
dotenv.config();


const { Kafka } = require("kafkajs");


const kafka = new Kafka({
    clientId: `${process.env.KAFKA_CLIENT_ID}`,
    brokers: [`${process.env.KAFKA_HOSTNAME}:${process.env.KAFKA_PORT}`], // Single broker endpoint with SSL
    ssl: true,
    sasl: {
        mechanism: "scram-sha-512",
        username: `${process.env.KAFKA_USER}`,
        password: `${process.env.KAFKA_PASSWORD}`,

    },
});

const producer = kafka.producer();

const produceMessage = async (topic, message) => {
    await producer.connect();
    await producer.send({
        topic: `${process.env.KAFKA_USER}-${topic}`,
        messages: [
            { value: message },
        ],
    });
    await producer.disconnect();
};

produceMessage("test", "this is testing again");