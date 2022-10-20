// 21. Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(!list1){
        return list2;
    }else if(!list2){
        return list1
    }else if(list1.val >= list2.val){
        list2.next = mergeTwoLists(list1, list2.next)
        return list2;
    }else if(list2.val >= list1.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))