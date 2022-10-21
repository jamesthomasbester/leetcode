// 27. Remove Element - https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    nums.filter(item => item != val)
    return nums
};


console.log(removeElement([3,2,2,3], 2))