const Kami = require('./kami');

const canvas = document.querySelector('#canvas');

let curColor;
[].slice.call(document.querySelectorAll('#colors [data-color]')).forEach(el => {
    el.addEventListener('click', e => {
        curColor = +el.dataset.color;
        console.log('curColor', curColor);
    });
});
document.querySelector('#colors [data-color]').click();
let grids = [
    [1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 1, 1, 1, 1, 1, 1, 1],
    [3, 1, 3, 1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
    [1, 1, 3, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 3, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 3, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 3, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 4, 4, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let kami = new Kami({
    grids
});

kami.mount(canvas);

canvas.addEventListener('click', e => {
    let node = kami.getNodeByOffset(e.offsetX / canvas.offsetWidth, e.offsetY / canvas.offsetHeight);
    kami.tap(node, curColor, {
        onEnd (result) {
            console.log(result);
            if (result) {
                alert('win');
            }
        },
        delay: 100,
    });
});

console.log(kami);
