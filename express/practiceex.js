let express = require("express");

let server = express();

server.get('/',(request,response)=>{
    response.send('<h1>welcome to your application</h1>')
})

server.get('/home',(request,response)=>{
    response.send("<h1>welcome to my home page </h1>")
})

server.get('/cart',(request,response)=>{
    response.send("<h1>welcome to your cart page </h1>")
})



server.listen("3000",()=>{
    console.log("server is running");
})