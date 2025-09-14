/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let count = 0
    for (let i = 0; i < p.length; i++) {
        if (p[i] == q[i]) {
            count++
        }
        
    }
    if (count == q.length) {
        return true
    }
    else {
        return false
    }

    
};
let p = [1,2,3], q = [1,2,3]
console.log(isSameTree(p, q));
