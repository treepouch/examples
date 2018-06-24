"use strict";
const fs = require("fs"), net = require("net"), filename = process.argv[2];

if (!filename)
    throw Error("Error: No filename specified.");

const ns = net.createServer(connection => {

    console.log("Subscribed connected.");
connection.write(JSON.stringify({type: "watching", file: filename}) + "\n");

const watcher = fs.watch(filename, () => connection.write(JSON.stringify({type: "changed", timestamp: Date.now()}) + "\n"));

connection.on("close", () => {
    console.log("Subscriber disconnected");
watcher.close();

});


});

ns.listen(60300, () => console.log("Listening for subscribers..."));