const express = require("express")
const cors = require("cors");

const app = express();
const port = 3001;
app.use(express.json())
app.use(cors())

app.get('/', (req, resp) => {
    resp.send("server is working")
})

app.listen(port, () => {
    console.warn("Server Started on port " + port);
})