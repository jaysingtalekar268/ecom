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

const consumer = kafka.consumer({ groupId: `${process.env.KAFKA_USER}-testGroup` });

const runConsumer = async (topic, callback) => {
    await consumer.connect();
    await consumer.subscribe({ topic: `${process.env.KAFKA_USER}-${topic}`, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (message) {
                console.log("\n kafka consumer file ", {
                    value: message.value.toString(),
                });
                // callback({ topic, partition, message });
            }
        },
    });
};


runConsumer("test");