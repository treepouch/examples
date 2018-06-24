"use strict";
const net = require("net"), client = net.connect({port: 60300});

client.on("data", data => {
    const message = JSON.parse(data);

   for (let item in message)
       console.log(`Key: ${item} Value: ${message[item]}`);



});