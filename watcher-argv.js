"use strict";


const fs = require("fs");
const filename = process.argv[2];

if (!filename)
    console.log("Error");
else
    fs.watch(filename, () => console.log(`${filename} changed`));
