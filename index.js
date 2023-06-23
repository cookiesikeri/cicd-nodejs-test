const express = require("express");
const os = require("os")

const port = 8006;

app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from node app is working",
        date: new Date(),
        version: process.env.npm_package_version,
        os: os.platform()
    })
})

app.listen(port, () => {
    console.log("Server started on port: " + port);
})