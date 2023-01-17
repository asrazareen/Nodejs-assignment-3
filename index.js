const http = require("http");
// const qstr = require("querystring");

const server = http.createServer((req, res) => {
    const url = req.url.split("?")[0];
 
    
    if(url == "/") {
        res.writeHead(200, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        });
        res.write(`<h1>Hello World</h1>
        <p> My name is Asra  </p>`);
        res.end();
    }
    else {
        res.writeHead(404, {
            "content-type" : "text/html",
            "Keep-Alive":100
        });
        res.end("<h1>Page is not found</h1>")
    }
})

server.listen(5000,() => console.log("Server is up at port no 5000"))