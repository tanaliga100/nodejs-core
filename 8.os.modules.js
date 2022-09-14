// OS MODULES

const os = require("os");

const info = os.userInfo();
console.log(info);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
