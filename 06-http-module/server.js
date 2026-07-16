const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req, "req");
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello node js from http module");
});

const port = 3000;
server.listen(port, () => {
  console.log(` server is now listening to port ${port}`);
});

// server.listen() --> starts the http server listening for connection. this method is identical to server.listen() from net.server
