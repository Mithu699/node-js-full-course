const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("projects");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("this page can not be found ")
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is now listening to ${port}`);
});
