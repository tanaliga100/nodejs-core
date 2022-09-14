const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, Lara");
  } else if (req.url === "/about") {
    // BLOCKING CODE
    for (let i = 0; i < 100000; i++) {
      for (let j = 0; j < 100000; j++) {
        console.log(`${i} : ${j}`);
      }
    }
    res.end("Hello, About");
  }
  res.end("Not Found");
});

server.listen((port = 8080), console.log(`Listening to port ${port}`));
