//HTTP or HTTPS

// node(server)<--------COMMUNICATION--------->BROWSER

var http = require('http'); //instrument of communication 
var server = http.createServer(function(req,res){
    res.write("<h1>NODE JS</h1>")
    res.write("<script>alert('OK')</script>")
    res.end("END");
}); //answer
    server.listen(7777); //waiting //form 1000+