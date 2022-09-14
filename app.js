// HTTP MODULES

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.writeFile("./about.html", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  } else {
    res.end(`
    <h1> Ooopps 1</h1>
    <p> We cant seem to find the page you are looking for...</p>
    <a href="/"> Back Home</a>
    `);
  }
});

server.listen(8080, console.log(`Listening on port 8080`));
