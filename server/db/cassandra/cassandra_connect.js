
const { Client } = require("cassandra-driver");

async function createCassandraClient() {

    const client = new Client({
        cloud: {
            secureConnectBundle: "./secure-connect-ecom-casd.zip",
        },
        credentials: {
            username: `${process.env.CASANDRA_CLIENT_ID}`,
            password: `${process.env.CASANDRA_SECRET}`

        },

    });
    await client.connect();

    try {
        if (!client.isClosed) {
            console.log('Cassandra db connection is open and active.');
            // Perform additional operations if needed
        } else {
            console.error('Cassandra db connection is closed.');
        }
    } catch (error) {
        console.error('Error checking Cassandra db connection:', error);
    }
    // Execute a query
    // const rs = await client.execute("SELECT * FROM system.local");
    // console.log(`Your cluster returned ${rs.rowLength} row(s)`);

    return client;
}

// Run the async function

module.exports = createCassandraClient;