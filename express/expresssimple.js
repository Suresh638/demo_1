const bodyParser = require('body-parser');
let express = require('express');

let server = express();

server.use(bodyParser.urlencoded({extended:false}))
// server.get("/",(request,response)=>{
//     response.send('<h1>welcome to express application</h1>');
// })

server.post("/home",(request,response)=>{
    response.send("<h1>landing on the home page</h1>");
})


// payment
server.get("/payment/:option",(request,response)=>{
var paymentoption = request.params['option'];
if(paymentoption==="debit")
    {
        response.send("<h1>debit card page will be landing soon</h1>")
    }
else if(paymentoption==="credit")
    {
        response.send("<h1>credit card page will be landing soon</h1>")
    }
    else
    response.send("<h1>no response choosen yet</h1>");
})

server.get('/',(request,response)=>{
    response.sendfile('index.html')
    response.status(501);
})

server.get("/contact",(request,response)=>{
    let details = {
        name  : "sureshkrishna g",
        city : "Erode",
        mobile : 6280362214,
        email : "sureshgopalkarattur@gmail.com"
    };
    response.json(details);
})

server.get("/wikipedia",(request,response)=>{
  
    response.redirect("https://www.wikipedia.org/");
})

server.post("/signin",(request,response)=>{
    let username = request.body['username'];
    response.send(`<h1>vaa machan ${username} eh signin pannita da nee</h1>`);
})

server.post("/cart",(request,response)=>{
    response.send("<h1>welcome to your cart </h1>");
})

server.listen('9000',()=>{
    console.log('express server is waiting for the client connection');
})