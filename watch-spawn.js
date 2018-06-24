"use strict";


const fs = require("fs"), spawn = require("child_process").spawn, filename = "target.txt";


try {
    if (!filename)
        throw Error("A file must be specified or it exists");

    fs.watch(filename, () => {

        const ls = spawn("ls", ["-l", "-h", filename]);
        ls.stdout.pipe(process.stdout);

    });
}

catch(e) {

    console.log(e);

}