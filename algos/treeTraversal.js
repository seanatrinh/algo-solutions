/*
 Create a Binary Tree data structure with the following methods:


InOrder: we traverse the left child and its sub-tree(s), then we visit the root and then traverse the right child and its sub-tree(s). It takes a “left-root-right” order.


1. Traverse the left subtree
2. Visit the root
3. Traverse the right subtree


Pre-Order: reads the nodes in a tree in a level-by-level order, left-child before right-child. The elements are read in a “root-left-right” order.


 1. Visit the root
 2. Traverse the left subtree
 3. Traverse the right subtree


Post-Order: Here, we traverse the left sub-tree, then the right subtree before we visit the root node. It takes a “left-right-root” order.

1.Traverse the left subtree
2. Traverse the right subtree
3. Visit the root

Example:
    10
   8 12
5 9 11 14


const root = new Tree(10)

// Level 1
root.left = new Tree(8)
root.right = new Tree(12)

// Level 2
root.left.left = new Tree(5)
root.left.right = new Tree(9)
root.right.left = new Tree(11)
root.right.right = new Tree(14)

function inOrder(root, result = []){
	// Should return [5,8,9,10,11,12,14]
}

function preOrder(root, result = []){
	// Should return [10,8,5,9,12,11,14]
}

function postOrder(){
	// Should return [5, 9, 8, 11,14,12, 10]
}

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // left - root - right
  inOrderTraverse(node = this, array = []) {
    if (node.left) inOrderTraverse(node.left, array);
    array.push(node.value);
    if (node.right) inOrderTraverse(node.right, array);

    return array;
  }

  // root - left - right
  preOrderTraverse(node = this, array = []) {
    array.push(node.value);
    if (node.left) preOrderTraverse(node.left, array);
    if (node.right) preOrderTraverse(node.right, array);

    return array;
  }

  // left - right - root
  postOrderTraverse(node = this, array = []) {
    if (node.left) postOrderTraverse(node.left, array);
    if (node.right) postOrderTraverse(node.right, array);
    array.push(node.value);

    return array;
  }
}