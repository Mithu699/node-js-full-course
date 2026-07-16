const fs = require("fs");

fs.readFile("input.text", "utf8", (err, data) => {
  if (err) {
    console.error("error reading file", err);
    return;
  }

  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.text", modifyFileData, (err) => {
    if (err) {
      console.error("error writting file", err);
      return;
    }

    console.log("data writting to the file");
    fs.readFile("output.text", "utf8", (err, data) => {

if(err){
    console.error('error reading file', err)
    return
}

console.log(data);

    });
  });
});
