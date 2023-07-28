// const link = document.body.getElementsByTagName('a');

// console.log(link[0]);

// const title = document.getElementById('title');
// console.log(title);

// const tittle = document.querySelector('title');
// console.log(tittle);

const ps = document.querySelectorAll('p');
console.log(ps);

document.body.insertBefore(ps[2], ps[0]);
ps[1].remove();
const h1 = document.createElement('h1');

const text = document.createTextNode("Hell0");

h1.appendChild(text);

console.log(h1);

document.body.appendChild(h1);
ps[2].appendChild(h1);