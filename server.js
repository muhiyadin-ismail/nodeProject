const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("./config/env");

const studentsRouter = require("./controllers/students");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("interact"));

app.use("/api/students", studentsRouter);

const server = http.createServer(app);
server.listen(env.serverPort, () => {
    console.log(`Server running on port ${env.serverPort}`)
});

server.on("close", () => console.log("Closed!"));

module.exports = {
    app, server
};