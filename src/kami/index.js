class Node {
    constructor (type) {
        this.type = type;
        this.color = '';
        this.line = '';
        this._linkNodes = new Set();
    }

    link (...nodes) {
        if (!this.type) return;
        nodes.filter(node => node && node instanceof Node && node.type).forEach(node => {
            if (this._linkNodes.has(node)) return; // if node already linked, do nothing
            this._linkNodes.add(node);
            node._linkNodes.add(this);
        });
    }
    unlink (...nodes) {
        nodes.filter(node => node && node instanceof Node && node.type).forEach(node => {
            this._linkNodes.delete(node);
            node._linkNodes.delete(this);
        });
    }
}

class Kami {
    constructor ({
        canvas,
        grids,
        colors = Kami.defaultColors,
        lines = Kami.defaultLines,
    } = {}) {
        const nodeGrids = grids.map(row => row.map(nodeType => new Node(nodeType)));

        Object.defineProperties(nodeGrids, {
            getNode: {
                value (x, y) {
                    return this[y] && this[y][x] || null;
                },
                enumerable: false,
            }
        });
        window.nodeGrids = nodeGrids;
        nodeGrids.forEach((row, y) => {
            row.forEach((node, x) => {
                node.link(nodeGrids.getNode(x, y - 1), nodeGrids.getNode(x, y + 1), nodeGrids.getNode(x + ((x + y) & 1 ? 1 : -1), y));
            });
        });

        this.nodeGrids = nodeGrids;
        if (canvas) {
            this.mount(canvas, { colors, lines });
        }
    }
    static defaultLines = {
        '1': 'rgba(183,235,143,.15)',
        '2': 'rgba(145,213,255,.15)',
        '3': 'rgba(255,229,143,.15)',
        '4': 'rgba(255,163,158,.15)',
    };
    static defaultColors = {
        '1': '#f6ffed',
        '2': '#e6f7ff',
        '3': '#fffbe6',
        '4': '#fff1f0',
    };
    mount (
        canvas,
        {
            colors,
            lines,
        } = {}) {
        this._canvas = canvas;
        colors = colors || this._colors || Kami.defaultColors;
        lines = lines || this._lines || Kami.defaultLines;
        this.setStyles({ colors, lines });
        this.render();
    }

    setStyles ({ node, colors, lines }) {
        this._colors = colors || this._colors;
        this._lines = lines || this._lines;
        if (node) {
            node.color = this._colors[node.type] || '';
            node.line = typeof this._lines === 'object' ? this._lines[node.type] : (node.type ? this._lines : '');
        } else {
            this.nodeGrids.forEach(row => {
                row.forEach(node => {
                    node.color = this._colors[node.type] || '';
                    node.line = typeof this._lines === 'object' ? this._lines[node.type] : (node.type ? this._lines : '');
                });
            });
        }
    }

    tap (node, targetType, { delay, onEnd } = {}) {
        const originalType = node.type;
        let traveledNodes = new WeakSet();
        let nodes = new Set([node]);

        // spread with BFS
        const spread = () => {
            let nextNodes = new Set();
            nodes.forEach(node => {
                traveledNodes.add(node);
                node.type = targetType;
                this.setStyles({ node });
                for (let linkNode of node._linkNodes) {
                    if (!traveledNodes.has(linkNode) && linkNode.type === originalType) {
                        nextNodes.add(linkNode);
                    }
                }
            });
            nodes = nextNodes;
            if (nodes.size) {
                if (delay) {
                    delay = delay / 10 * 9;
                    this.render();
                    setTimeout(spread, delay);
                } else {
                    spread();
                }
            } else {
                this.render();
                onEnd && onEnd(this.checkConsistency());
            }
        };
        spread();
    }

    checkConsistency () {
        let type;

        for (let row of this.nodeGrids) {
            for (let node of row) {
                if (!type) type = node.type;
                if (node.type && node.type !== type) return false;
            }
        }

        return true;
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
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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
}

module.exports = Kami;