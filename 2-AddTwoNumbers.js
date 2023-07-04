/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let lastNode = new ListNode()
    let masterNode = lastNode
    let remander;
    while(l1 || l2){
        let val1 = 0
        let val2 = 0
        if(l1){
            val1 = l1.val
            l1 = l1.next
        }
        if(l2){
            val2 = l2.val
            l2 = l2.next
        }
        if(remander){
            sum += 1
        }
        let sum = val1 + val2
        if(sum > 9){
            remander = 1

        }
        const node = new ListNode(sum)
        lastNode.next = node
        lastNode = node
    }
    return masterNode
};