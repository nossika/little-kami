// const Kami = require('../kami');
import Kami from '../kami';
import gridsData from './grids';

let gridsIndex = 0;

function initPage () {
    const { grids, limit, styles = {} } = gridsData[gridsIndex];
    const kami = new Kami({
        grids,
        colors: styles.colors,
        lines: styles.lines,
    });
    const canvasContainerEl = document.querySelector('#canvas-wrapper');
    const colorsContainerEl = document.querySelector('#colors-wrapper');
    const tipContainerEl = document.querySelector('#tips-wrapper');

    canvasContainerEl.innerHTML = `<canvas class="canvas" width="300" height="500"></canvas>`;

    colorsContainerEl.innerHTML = '';
    kami.types.forEach(type => {
        colorsContainerEl.innerHTML +=
            `<span
            data-type="${type}" 
            class="color"
            style="background: ${kami.colors[type]}; border: 3px solid ${kami.lines[type]}"
        ></span>`
    });

    tipContainerEl.innerHTML = `<div>请在${limit}步之内完成</div>`;

    let curType;
    let colorsEl = [].slice.call(colorsContainerEl.querySelectorAll('[data-type]'));
    colorsEl.forEach(el => {
        el.addEventListener('click', function (e) {
            colorsEl.forEach(el => {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
            curType = +this.dataset.type;
        });
    });
    colorsContainerEl.querySelector('[data-type]').click();


    const canvasEl = canvasContainerEl.querySelector('canvas');

    canvasEl.addEventListener('click', e => {
        let node = kami.getNodeByOffset(e.offsetX / canvasEl.offsetWidth, e.offsetY / canvasEl.offsetHeight);

        kami.tap(node, curType, {
            onEnd ({ result, tapCount }) {
                if (result) {
                    gridsIndex++;
                    if (gridsIndex >= gridsData.length) {
                        setTimeout(() => {
                            alert(`已通过所有关卡~！`);
                        }, 50);
                        return;
                    }
                    setTimeout(() => {
                        alert(`通过~！（当前进度：${gridsIndex}/${gridsData.length}）`);
                    }, 50);
                    initPage();
                } else if (tapCount >= limit) {
                    setTimeout(() => {
                        alert(`失败...别灰心，再试一下`);
                    }, 50);
                    kami.reset();
                }
            },
            delay: 100,
        });
    });

    kami.mount(canvasEl);
}

initPage();


