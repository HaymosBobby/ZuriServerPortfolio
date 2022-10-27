const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err.code);
    } else if(!err) {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

const port = 5000;

server.listen(port, () => {
  console.log("Server created");
});
