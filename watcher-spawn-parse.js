"use strict";


const fs = require("fs"), spawn = require("child_process").spawn, filename = "target.txt";


try {
    if (!filename)
        throw Error("A file must be specified or it exists");

    fs.watch(filename, () => {

        const ls = spawn("ls", ["-l", "-h", filename]);
        let output = "";

        ls.stdout.on("data", chunk => output += chunk);

        ls.on("close", () => {
            const parts = output.split(new RegExp("\\s+"));
            console.log(parts);
        })

    });
}

catch(e) {

    console.log(e);

}