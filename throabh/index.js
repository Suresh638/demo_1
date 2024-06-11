const fs = require('fs');

// let data = fs.readFilea('sample.txt','utf-8');
// console.log(data);

// writing a file

// always override the existing data

let fw = fs.writeFileSync('./write.txt',"hi this is a sample of writing a file in node");

fs.writeFileSync('./write.txt'," \n the edited version of write.txt")

// append method

fs.appendFile("./write.txt"," \n hii machii",(err)=>{
    if(err){
        console.log("please look through there is an error");
    }
})

fs.unlinkSync('./sample.txt');