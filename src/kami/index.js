const defaultColors = {
    '0': '#ffffff',
    '1': '#f6ffed',
    '2': '#e6f7ff',
    '3': '#fffbe6',
    '4': '#fff1f0',
};

const lineColor = 'rgba(0, 0, 0, .02)';


module.exports = class Kami {
    constructor ({
        canvas,
        colors = defaultColors,
        grids
    } = {}) {
        this.grids = grids;
        this.colors = colors;
        this.canvas = canvas;
        if (this.canvas) {
            this.mount();
        }

    }

    mount (canvas, { colors } = {}) {
        this.canvas = canvas || this.canvas;
        this.colors = colors || this.colors || defaultColors;
        this.render();
    }

    tap (nodePos) {

    }

    // dom
    render () {
        if (!this.canvas) return;
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        const ctx = this.canvas.getContext('2d');
        const { grids, colors } = this;
        const gridXLen = grids[0].length;
        const gridYLen = grids.length;
        const nodeWidth = canvasWidth / gridXLen;
        const nodeHeight = canvasHeight / ((gridYLen -1) / 2) / 2;

        grids.forEach((rowData, y) => {
            rowData.forEach((nodeType, x) => {
                let reverse = (x + y) & 1;
                ctx.beginPath();
                if (!reverse) {
                    ctx.moveTo(nodeWidth * x, nodeHeight * (y - 1));
                    ctx.lineTo(nodeWidth * (x + 1), nodeHeight * y);
                    ctx.lineTo(nodeWidth * x, nodeHeight * (y + 1));
                    ctx.lineTo(nodeWidth * x, nodeHeight * (y - 1));
                } else {
                    ctx.moveTo(nodeWidth * x, nodeHeight * y);
                    ctx.lineTo(nodeWidth * (x + 1), nodeHeight * (y - 1));
                    ctx.lineTo(nodeWidth * (x + 1), nodeHeight * (y + 1));
                    ctx.lineTo(nodeWidth * x, nodeHeight * y);
                }

                ctx.fillStyle = colors[nodeType];
                ctx.fill();
                ctx.strokeStyle = lineColor;
                ctx.stroke();
                ctx.closePath();
            });
        });
    }
    getNodePos (percentX, percentY) {
        const areaWidth = 1 / this.grids[0].length;
        const areaHeight = (1 / ((this.grids.length - 1)));

        let areaX = percentX / areaWidth | 0;
        let areaOffsetXPercent = percentX / areaWidth - areaX;
        let areaY = percentY / areaHeight | 0;
        let areaOffsetYPercent = 1 - (percentY / areaHeight - areaY);

        let isUpHalf = (areaX + areaY) & 1 ? (1 - areaOffsetXPercent) < areaOffsetYPercent : areaOffsetXPercent < areaOffsetYPercent;

        let x = areaX;
        let y = isUpHalf ? areaY : areaY + 1;
        return [x, y];
    }
    tapAndRender (nodePos) {
        if (!this.canvas) return;
    }
};