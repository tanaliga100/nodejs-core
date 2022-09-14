const { readFile } = require("fs");

console.log("start the task");

readFile("./content/first.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("done with the first task");
});
console.log("start the next tasks");
