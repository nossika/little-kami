import Node from './node';
import { defaultLines, defaultColors } from './config';

export default class KamiCore {
    constructor ({
                     canvas,
                     grids,
                     colors = KamiCore.defaultColors,
                     lines = KamiCore.defaultLines,
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

        // 处理各节点的链接关系
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

    static defaultLines = defaultLines;
    static defaultColors = defaultColors;

    // 触发某节点的改变
    tap (node, targetType, { delay, onEnd } = {}) {
        const originalType = node.type;
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
                onEnd && onEnd(this.checkConsistency());
            }
        };
        spread();
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

