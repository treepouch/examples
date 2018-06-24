"use strict";


const fs = require("fs"), filename = "target.txt";

try {
    if (!filename)
        throw Error("A file must be specified or it exists");

    fs.readFile(filename, (err, data) => {
        if (err)
            throw err;
        console.log(data.toString());

    });
}

catch(e) {

    console.log(e);

}
/**

fs.appendFile("target.txt", "goodbye", err => {
    if(err)
    console.log("error thrown")
});

 **/