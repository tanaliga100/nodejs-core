const EventEmitter = require("events");
// order matters when choosing events
// listen to events first and then emit subsequently

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`User is ${name}  with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Data passed`);
});

customEmitter.emit("response", "john", 25);
