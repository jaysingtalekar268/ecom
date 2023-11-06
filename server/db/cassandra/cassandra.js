const cassandraObject = require("./cassandra_connect")

const { v4: uuidv4 } = require('uuid');
const newUuid = uuidv4();

async function productSelect(userId) {
    try {
        const cassandraClient = (await cassandraObject());

        const queryViews = `SELECT productid FROM ${process.env.CASANDRA_KEYSPACE}.user_views WHERE user_id = ? ALLOW FILTERING`;
        const queryPurchases = `SELECT productid FROM ${process.env.CASANDRA_KEYSPACE}.user_purchases WHERE user_id = ? ALLOW FILTERING`;
        
        const [viewsResult, purchasesResult] = await Promise.all([
            await cassandraClient.execute(queryViews, [userId]),
            await cassandraClient.execute(queryPurchases, [userId])
        ]);
   

        return [ viewsResult, purchasesResult ]
    } catch (error) {
        console.warn("error in productSelect ", error)
    }


}

async function viewInsert(message) {
    console.warn("viewInsert database")
    try {
        const cassandraClient = (await cassandraObject());
        const query = `INSERT INTO ${process.env.CASANDRA_KEYSPACE}.user_views(data_id,timestamp,user_id,productId) values (?, ?,?,?)`;
        const params = [newUuid, Date.now(), message.userId, message.productId];

        await cassandraClient.execute(query, params, { prepare: true }, (err, result) => {
            if (err) {
                console.error('\nError inserting data:', err);
            } else {
                console.log('\nData inserted successfully:', result);
            }
        });
    } catch (error) {
        console.warn("error in productSelect ", error)
    }


}


async function getTestData() {
    const cassandraClient = (await cassandraObject());
    const rs = await cassandraClient.execute("SELECT * FROM system.local");
    // console.log(`Your cluster returned ${rs.columns.map(el=>el.name)} row(s)`);

    const query = 'SELECT * FROM ecom.test_table';
    try {
        const result = await cassandraClient.execute(query);
        console.warn("\n", result.columns.map(el => el.name))
        console.warn("\n", result.rows)
        return result.rows;
    } catch (error) {
        console.error('\nError retrieving user history from Cassandra:', error);
        return [];
    }


}

module.exports = {
    productSelect,
    viewInsert,
    getTestData,
}