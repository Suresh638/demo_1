// synchronous
//line by line or ordered execution of the program.

console.log("this is the first statement");
console.log("this is the second statement");
console.log("this is the third statement");
console.log("this is the fourth statement");

//asynchronous
console.log("asynchronous -1");
setTimeout(()=>{
    console.log("asynchronous-2");
},2000);
console.log("asynchronous-3");
