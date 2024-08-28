class NodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isleaf() {
    return this.left === null && this.right === null;
  }
}

module.exports = NodeTree;