// 26. Remove Duplicates from Sorted Array - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i + 1]){
            nums[count] = nums[i]
            count++;
        }
    } 
    return count;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))