// PATH MODULES

const path = require("path");

console.log(path.sep);
// path name
const filePath = path.join("./content", "subfolder", "test.txt");
console.log(filePath);
// base name
const bName = path.basename(filePath);
console.log(bName);
// absolute path
const abs = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(abs);
