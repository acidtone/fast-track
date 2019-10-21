const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {

  res.writeHead(200, {"Content-Type": "text/html"});
  // res.write("<h1>Hello World!</h1>");
  // res.write(`You requested ${req.url}`);

  const html = fs.readFileSync(__dirname + '/assets/index.html');

  // let html = fs.readFileSync(__dirname + '/assets/index.tpl','utf8');

  // html = html.replace('{Message}','Hello world...');
  console.log('logged');
  res.end(html);
  
}).listen(8080,'127.0.0.1');