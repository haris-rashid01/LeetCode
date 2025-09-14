
// //  * Definition for a binary tree node.
//  function TreeNode(val, left, right) {
//      this.val = (val===undefined ? 0 : val)
//      this.left = (left===undefined ? null : left)
//      this.right = (right===undefined ? null : right)
//  }
 

// @param {TreeNode} root
// @return {number[]}


var inorderTraversal = function(root) {
    const result = [];

    const inorder = function(node) {
        if (node === null) return;
        inorder(node.left);      // Traverse left
        result.push(node.val);   // Visit node
        inorder(node.right);     // Traverse right
    };

    inorder(root);
    return result;
};

let root = [1,null,2,3]
console.log(inorderTraversal(root))