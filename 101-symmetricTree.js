// 101. Symmetric Tree - https://leetcode.com/problems/symmetric-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var isSymmetric = function(root) {
    var memory = []
    var count = 0;
    var test = function(val) {
        console.log(val)
        if(!val){
            count ++;
            console.log(memory)
            console.log(count)
            return true
        }else{
            memory.push(val.val)
            return test(val.left) && test(val.right)
        }
    }
    test(root)

};