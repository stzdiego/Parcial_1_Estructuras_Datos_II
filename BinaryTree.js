const Node = require('./NodeTree');

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;

            while (!isFound) {
                if (current.value === value)
                {
                    isFound = true;
                    return null;
                }
                if (current.value > value) {
                    if (!current.left) {
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }

    }

    calculateHeight(node = this.root) {
        if (node === null) {
            return -1;
        }
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

}

module.exports = BinaryTree;