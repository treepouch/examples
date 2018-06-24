const events = require("events"), EventEmitter = events.EventEmitter;


class LDJClient extends EventEmitter {

    constructor(stream) {
        super();
        let buffer = "";
        stream.on("data", data => {
            buffer += data;
        console.log("bufferdata", buffer);
            let boundary = buffer.indexOf("\n");
            while (boundary !== -1) {
                const input = buffer.substring(0, boundary);
                console.log("buffer", buffer);
                buffer = buffer.substring(boundary + 1);
                this.emit("message", JSON.parse(input));
                boundary = buffer.indexOf("\n");




            }


        });


    }

    static connect(stream) {


        return new LDJClient(stream);
    }


}

module.exports = LDJClient;