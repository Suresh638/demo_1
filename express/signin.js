const bodyParser = require('body-parser');

let express = require('express')

let server = express();

server.use(bodyParser.urlencoded({extended:false}))


server.post('/',(request,response)=>{
    var name = request.body['username'];
    response.send(`<h1>Welcome to my cart ${name}</h1>`);
})





server.listen('7500',()=>{
    console.log('server is waiting for the client to respond');
})