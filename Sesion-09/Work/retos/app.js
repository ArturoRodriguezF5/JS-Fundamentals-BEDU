const imgs = document.querySelectorAll('img');

console.log(imgs)

for (const img of imgs) {
    img.src = img.alt;
}