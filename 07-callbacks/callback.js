const fs = require("fs");

function person(name, callbackfn) {
  console.log(`Hello ${name}`);
  callbackfn();
}

function address() {
  console.log("india");
}

person("sudhanshu ranjan", address);

fs.readFile("input.text", "utf8", (err, data) => {
  if (err) {
    console.error("error reading file", err);
    return
  }
  console.log(data);
  
});
