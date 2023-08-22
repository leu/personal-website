const { parse } = require("url");
const next = require("next");
const fs = require("fs")
const http = require("http")
const https = require("https")

const dev = process.env.NODE_ENV !== "production";
const hostname = 'danielsimols.net'
const port = 443
const app = next({ dev, port, hostname })
const handle = app.getRequestHandler()

var httpsOptions

if (process.env.NODE_ENV === "production") {
  console.log("production!")
  httpsOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/danielsimols.net/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/danielsimols.net/fullchain.pem"),
  }
}

app.prepare().then(() => {
  var server

  if (process.env.NODE_ENV === 'production') {
    server = https.createServer(httpsOptions, (req, res) => {
      if (req.headers.host !== 'danielsimols.net') {
        res.writeHead(301, {
          location: 'https://danielsimols.net'
        })
        res.end()
      }
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })

    server.addContext("danielsimols.net", {
      key: fs.readFileSync("/etc/letsencrypt/live/danielsimols.net/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/danielsimols.net/fullchain.pem"),
    })
  
    server.addContext("www.danielsimols.net", {
      key: fs.readFileSync("/etc/letsencrypt/live/www.danielsimols.net/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/www.danielsimols.net/fullchain.pem"),
    })
  
  }

  server.listen(443, (err) => {
    if (err) throw err;
    console.log("> Server started on https://localhost:443");
  });

  http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(80, (err) => {
    if (err) throw err;
    console.log("> Server started on http://localhost:80");
  });
});