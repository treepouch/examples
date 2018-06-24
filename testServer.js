const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

console.log("path.parse ", path.parse(__filename));
console.log("os.totalmem ", os.totalmem());
console.log("os.freemem ", os.freemem());
fs.readdir("./", (err, files) => console.log("fs.readdir ", files));
const onRequest = (request, response) => {
	
response.writeHead(200, {"content-type" : "text/html"});

let copy = `The only way to go to <a href="http://www.yahoo.com">Yahoo</a> is 
by getting on a computer.`;

fs.readFile("index.html", (err, html) => {

  try {
      if(err)
      throw err;
    response.write(html);
    response.end();
    }
    catch(e) {

      console.log(e);

    }

});






}


http.createServer(onRequest).listen(8889);