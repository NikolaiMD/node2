//routing - route
//->/home
//->/about
//->/contact
const http = require('http');
const port = 7777;
var clicks = 0;
const server = http.createServer(handle);
      server.listen(port);
function handle(req,res){
    console.log('client -> request' + req.url);
    clicks++;
    res.write(`
        <h1>${clicks}</h1>
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact us</a>

    `);
    if(req.url=='/'){
        res.write('<h1>HOME</h1>')
    }
    if(req.url=='/about'){
        res.write('<h1>ABOUT</h1>')
    }
    if(req.url=='/contact'){
        res.write('<h1>CONTACT_US</h1>')
    }
    res.end();
}
