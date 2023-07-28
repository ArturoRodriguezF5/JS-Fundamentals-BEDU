function createNode(type, child){
    const node = document.createElement(type);
    const text = document.createTextNode(child);

    node.appendChild(text);

    return node;
}

console.log(createNode('h1', 'Hola'));

const autor = createNode('strong', '- Karl Popper -');
console.log(autor);

const quo = document.getElementById('quote');

console.log(quo);

quo.appendChild(autor);

const link = document.querySelector('#link');
link.textContent = 'some cool link';
link.href = 'http://www.youtube.com';
link.className = 'linked';
