// Create a server that WriteS a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n'
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello Node!!!!</h1>\n");
  } else {
    //Handle Page Not Found Case
    res.write("ERROR 404 PAGE NOT FOUND");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port localhost:3000 ...");
});
