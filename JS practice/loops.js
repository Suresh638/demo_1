let mynumber = 0;
while(mynumber++<1){
    console.log(mynumber);
}

// do while loop:
let num = 0;
do{
    console.log("hii");
    num++;
}while(num<6);

// 
for(let i=0;i<5;i++){
    console.log(i);
}

let num_1,num_2;
function product(n1,n2){
    return n1*n2;
}

console.log(product(5,4));

let res = function(){
  return 4/2;
}
console.log(res());

let sub = ()=>{
    console.log(5-2);
}
sub();

function call_1(call){
    console.log("call back one function");
    call();
}

function call_2() {
    console.log("call back two function");
}

call_1(call_2)


