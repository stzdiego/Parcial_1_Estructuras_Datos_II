const BinaryTree = require('./BinaryTree');

// Prueba 1
const tree1 = new BinaryTree();
tree1.insert(10);
tree1.insert(5);
tree1.insert(15);
tree1.insert(3);
tree1.insert(7);
tree1.insert(12);
tree1.insert(18);

/*
        10
       /  \
      5    15
     / \   / \
    3   7 12  18
*/

// Prueba 2
const tree2 = new BinaryTree();
tree2.insert(10);
tree2.insert(5);
tree2.insert(15);
tree2.insert(3);
tree2.insert(7);
tree2.insert(6);
tree2.insert(8);
tree2.insert(20);

/*
        10
       /  \
      5    15
     / \     \
    3   7     20
       / \
      6   8
*/

const height1 = tree1.calculateHeight();
const height2 = tree2.calculateHeight();

console.log(`La altura del árbol 1 es: ${height1}`);
console.log(`La altura del árbol 2 es: ${height2}`);