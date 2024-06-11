let http = require('http');
let server = http.createServer((request,response)=>{
    
    if(request.url=='/')
    response.write("<h1>welcome to the demo of http server</h1>")
    else if(request.url=='/home'){
        response.write("<h1>Landing on the home page</h1>")
    }
    else if(request.url =='/cart'){
        response.write("<p> welcome to your cart</p>")
    }
    else if(request.url=='/fav'){
        response.write("<h1>welcome to the favourites page</h1>")
    }
})

server.listen(8000,()=>{
    console.log('http server is running');
})
