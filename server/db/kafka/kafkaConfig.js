
// kafkaConfig.js

module.exports = {
    clientId: `${process.env.KAFKA_HOSTNAME}:9094`,
    brokers: [`${process.env.KAFKA_USER}`], // Single broker endpoint with SSL
    ssl: true,
    sasl: {
        mechanism: "scram-sha-512",
        username: `${process.env.KAFKA_USER}`,
        password: `${process.env.KAFKA_PASSWORD}`,

    },

};
