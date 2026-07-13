const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");

// sync way of creating the file

fs.writeFileSync(filePath, "hello from node js ");
console.log("file created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("file content:", readContentFromFile);

fs.appendFileSync(filePath, "/n this is new line added to fs");
console.log("new file content added");

// async way for creating a file

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, sudhanshu is here", (err) => {
  if (err) throw err;
  console.log("async file is created successfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);
    fs.appendFile(asyncFilePath, "/nthis is the another line added", (err) => {
      if (err) throw err;
      console.log("new line is added to async file  ");
      fs.readFile(asyncFilePath, "utf8", (err, updateData) => {
        if (err) throw err;
        console.log("updated file content", updateData);
      });
    });
  });
});
