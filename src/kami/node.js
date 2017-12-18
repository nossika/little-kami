export default class Node {
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