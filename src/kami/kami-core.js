import Node from './node';
import { defaultLines, defaultColors } from './config';

function initData () {
    const nodeTypeMap = {};
    const nodeGrids = this._originGrids.map(row => row.map(nodeType => {
        nodeTypeMap[nodeType] = true;
        return new Node(nodeType);
    }));

    Object.defineProperties(nodeGrids, {
        getNode: {
            value (x, y) {
                return this[y] && this[y][x] || null;
            },
            enumerable: false,
        }
    });

    // 处理各节点的链接关系
    nodeGrids.forEach((row, y) => {
        row.forEach((node, x) => {
            node.link(nodeGrids.getNode(x, y - 1), nodeGrids.getNode(x, y + 1), nodeGrids.getNode(x + ((x + y) & 1 ? 1 : -1), y));
        });
    });

    this.nodeGrids = nodeGrids;
    this._tapCount = 0;
    this.types = Object.keys(nodeTypeMap).map(typeStr => +typeStr).filter(type => type);

    if (this._canvas) {
        typeof this.mount === 'function' && this.mount(this._canvas);
    }
}

export default class KamiCore {
    constructor ({
                     canvas = null,
                     grids,
                     colors = KamiCore.defaultColors,
                     lines = KamiCore.defaultLines,
                 } = {}) {
        if (!grids || !grids[0]) {
            throw new Error('please use correct grids');
        }

        this._originGrids = grids;
        this._canvas = canvas;
        this.colors = colors;
        this.lines = lines;
        initData.call(this);
    }

    static defaultLines = defaultLines;
    static defaultColors = defaultColors;

    // 触发某节点的改变
    tap (node, targetType, { delay, onEnd } = {}) {
        const originalType = node.type;
        if (targetType === originalType) return;

        this._tapCount++;
        let traveledNodes = new WeakSet();　// 已遍历过的节点
        let nodes = new Set([node]);　// 需要处理的当前层节点

        // 以BFS算法遍历各节点进行处理
        const spread = () => {
            let nextNodes = new Set();
            nodes.forEach(node => {
                traveledNodes.add(node);
                node.type = targetType;
                typeof this.setStyles === 'function' && this.setStyles({ node });
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
                    typeof this.render === 'function' && this.render();
                    setTimeout(spread, delay);
                } else {
                    spread();
                }
            } else {
                typeof this.render === 'function' && this.render();
                onEnd && onEnd({
                    result: this.checkConsistency(),
                    tapCount: this._tapCount,
                });
            }
        };
        spread();
    }

    reset () {
        initData.call(this);
    }

    // 检查结果
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
}

module.exports = KamiCore;

