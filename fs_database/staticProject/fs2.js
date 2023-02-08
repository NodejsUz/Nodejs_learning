// static folder create qilish
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
// static file nomi
const root = "public";

const server = http.createServer((req, res) => {
  let filePath = path.join(root, req.url === "/" ? "index.html" : req.url);
  // readFile asynchron ishlaydi readFileSync esa synchron
  fs.readFile(filePath, (error, data) => {
    if (error) {
      fs.readFile(path.join(root, "404.html"), (_, data) => {
        // text/plain matnli filelarni o'qish uchun ishlatiladi
        // application/json json filelarni o'qiydi
        console.log(data.toString());
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      return;
    }

    // html, css, js filelar uchun
    let contentType = "text/html";
    if (filePath.endsWith(".css")) {
      contentType = "text/css";
    } else if (filePath.endsWith(".js")) {
      contentType = "application/javascript";
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`server listen on ${port} port`);
});
