// // get element by  id
// let title = document.getElementById("mainheading");
// console.log(title);

// // get element by class
// let list_items = document.getElementsByClassName("list-items");
// console.log(list_items);

// // get element by tagname
// let  li_tag = document.getElementsByTagName("li");
// console.log(li_tag);

// // get element by queryselector
// let queryall = document.querySelectorAll('li');
// console.log(queryall);

// let query = document.querySelector('li');
// console.log(query);

let heading = document.getElementById("mainheading");
console.log(heading);

heading.style.color = "blue";
heading.style.fontSize = "100px";

let lists = document.querySelectorAll(".list-items");
console.log(lists);

for(i=0;i<lists.length;i++){
    lists[i].style.color = "green";
}

let para  = document.querySelector(".para");
para.style.color = "brown";

// adding a new element 

let paragraph = document.createElement('p');
let body = document.querySelector('body');
body.append(paragraph)
paragraph.innerText = "vanakkam da maapla";
console.log(paragraph.innercontent);

let span = document.createElement('span');
body.append(span);
span.innerText = "hii balachandar";

let li = document.createElement('li');
let ul = document.querySelector('ul');
ul.append(li);
li.innerText = "deadpool";

li.style.color = "orange";

// modifing attribute and classes
li.setAttribute('class','lastlist');
li.removeAttribute('class');

li.setAttribute("id","li");
li.removeAttribute('id');
// li.removeAttribute('style');

li.classList.add("list-items");
// li.classList.remove("list-items");

console.log(li.classList.contains('list-items'));

// parent node traversal
let unordered = document.querySelector('ul');

// console.log(unordered.parentElement.parentElement);

let html = document.documentElement;;
console.log(html);

let ulist = document.querySelector('ul');

console.log(ul.childNodes);

console.log(ul.firstChild);

console.log(ul.lastChild);

ulist.childNodes[3].style.color = "red"

