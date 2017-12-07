const defaultColors = {
    '1': '#f6ffed',
    '2': '#e6f7ff',
    '3': '#fffbe6',
    '4': '#fff1f0',
};

const defaultLines = 'rgba(0, 0, 0, .02)';

class Node {
    constructor (type) {
        this.type = type;
        this.color = '';
        this.line = '';
    }
}

module.exports = class Kami {
    constructor ({
        canvas,
        grids,
        colors = defaultColors,
        lines = defaultLines,
    } = {}) {
        this.nodeGrids = grids.map(row => row.map(nodeType => new Node(nodeType)));
        if (canvas) {
            this.mount(canvas, { colors, lines });
        }
    }

    mount (
        canvas,
        {
            colors,
            lines,
        } = {}) {
        this._canvas = canvas;
        colors = colors || this._colors || defaultColors;
        lines = lines || this._lines || defaultLines;
        this.setStyles(colors, lines);
        this.render();
    }

    setStyles (colors, lines) {
        this._colors = colors;
        this._lines = lines;
        this.nodeGrids.forEach(row => {
            row.forEach(node => {
                node.color = this._colors[node.type] || '';
                node.line = typeof this._lines === 'object' ? this._lines[node.type] : (node.type ? this._lines : '');
            });
        })
    }

    tap (nodePos) {

    }

    getNodeByOffset (percentX, percentY) {
        const areaWidth = 1 / this.nodeGrids[0].length;
        const areaHeight = (1 / ((this.nodeGrids.length - 1)));

        let areaX = percentX / areaWidth | 0;
        let areaOffsetXPercent = percentX / areaWidth - areaX;
        let areaY = percentY / areaHeight | 0;
        let areaOffsetYPercent = 1 - (percentY / areaHeight - areaY);

        let isUpHalf = (areaX + areaY) & 1 ? (1 - areaOffsetXPercent) < areaOffsetYPercent : areaOffsetXPercent < areaOffsetYPercent;

        let x = areaX;
        let y = isUpHalf ? areaY : areaY + 1;
        return this.nodeGrids[y][x];
    }

    render () {
        if (!this._canvas) return;
        const { nodeGrids, _canvas } = this;

        const canvasWidth = _canvas.width;
        const canvasHeight = _canvas.height;
        const ctx = _canvas.getContext('2d');
        const gridXLen = nodeGrids[0].length;
        const gridYLen = nodeGrids.length;
        const nodeWidth = canvasWidth / gridXLen;
        const nodeHeight = canvasHeight / ((gridYLen -1) / 2) / 2;

        nodeGrids.forEach((rowData, y) => {
            rowData.forEach((node, x) => {
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

                ctx.fillStyle = node.color;
                node.color && ctx.fill();
                ctx.strokeStyle = node.line;
                node.line && ctx.stroke();
                ctx.closePath();
            });
        });
    }

    tapAndRender (nodePos) {
        if (!this._canvas) return;
    }
};