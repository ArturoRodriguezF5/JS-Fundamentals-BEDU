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
