const Kami = require('./kami');

const canvas = document.querySelector('#canvas');

let curColor;
[].slice.call(document.querySelectorAll('#colors [data-color]')).forEach(el => {
    if (!curColor) curColor = el.dataset.color;
    el.addEventListener('click', e => {
        curColor = el.dataset.color;
        console.log(curColor);
    });
});

let grids = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let kami = new Kami({
    grids
});

kami.mount(canvas);

canvas.addEventListener('click', e => {
    let [x, y] = kami.getNodePos(e.offsetX / canvas.offsetWidth, e.offsetY / canvas.offsetHeight);
    console.log(grids[y][x], [x, y]);
});

console.log(kami);


