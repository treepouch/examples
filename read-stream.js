"use strict";


const fs = require("fs"), filename = "target.txt";


try {
    if (!filename)
        throw Error("A file must be specified or it exists");

    fs.createReadStream(filename)
        .on("data", chunk => process.stdout.write(chunk))
        .on("error", err => process.stderr.write(`Error: ${err.message}\n`));
}

catch(e) {

    console.log(e);

}