const { viewInsert } = require("../cassandra/cassandra");
const { runConsumer } = require("./kafkaConsumer")

async function getKafkaConsumer() {
    // runConsumer("test")
    runConsumer("test", async ({ topic, partition, message }) => {
        console.log(`\nReceived message from topic ${topic}, partition ${partition}: ${message.value.toString()}`);
        message = JSON.parse(message.value);
        message = JSON.parse(message);
        console.warn("\nmessage value", message)
        console.warn("\nmessage value", typeof(message))

        await addProductViewData(message);

    }).catch(error => {
        console.error('\nError in Kafka consumer:', error);
    });


}


async function addProductViewData(message) {
    if (message?.userId && message?.productId) {
        // const cassandraClient = (await cassandraObject());
        // // console.log(`Your cluster returned ${rs.columns.map(el=>el.name)} row(s)`);
        // const query = `INSERT INTO ${process.env.CASANDRA_KEYSPACE}.user_views(data_id,timestamp,user_id,productId) values (?, ?,?,?)`;
        // const params = [newUuid, Date.now(), message.userId, message.productId];

        // cassandraClient.execute(query, params, { prepare: true }, (err, result) => {
        //     if (err) {
        //         console.error('\nError inserting data:', err);
        //     } else {
        //         console.log('\nData inserted successfully:', result);
        //     }
        // });

        console.log('addproductViewData :',);

        await viewInsert(message);

    } else {
        console.warn("\n invalid  userId ", message?.userId, " productId ", message?.productId);
    }

}

module.exports = {
    getKafkaConsumer,
}