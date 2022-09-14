// const http = require("http");

// // const server = http.createServer((req, res) => {
// //   res.end('Welcome')
// // })

// // Using Event Emitter API
// const server = http.createServer();
// // emits request event
// // subcribe to it / listen for it / respond to it
// server.on("request", (req, res) => {
//   res.end("Welcome");
// });

// server.listen(5000);

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);

    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
