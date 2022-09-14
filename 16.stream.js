const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {});
// default 64kb
// last buffer - remainder
// highwaterMark - control size
// const stream = createReadStream("./content/big.txt", highwaterMark: 90000);
// const stream = createReadStream("./content/big.txt", {encoding: "utf8"});

stream.on("data", (data) => {
  console.log(data);
});

stream.on("error", (err) => {
  console.log(err);
});
