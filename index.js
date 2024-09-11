const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url}  New req received \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('logs.txt', log,(err,data)=>{
        switch (myUrl.pathname) {
            case '/': res.end("Welcome to Homepage");
            break;
            case '/about': res.end("Hello I am the developer ");
            break;
            case '/contactus': res.end("Contact Us");
            break;
            default : res.end("404 not found");

        }

    });
    

});

myServer.listen(8000, ()=> console.log("Server Started!"));