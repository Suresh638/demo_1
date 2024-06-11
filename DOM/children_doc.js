let title = document.title;
console.log(title);

document.title = "krishna";

console.log(document.title);
// console.dir(document.body.children[0].children[0]);

let head_1 = document.body.children[0].children[0];
head_1.innerText = "hii machans";

console.log(head_1);

let para = document.body.children[0].children[1];
para.innerText = "this is  a modified paragraph";
console.dir(para);