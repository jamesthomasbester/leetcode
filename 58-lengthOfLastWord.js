// 58. Length of Last Word - https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.split(" ")
    let count = 1;
    while((s[s.length - count]).length <= 0){
        count++
    }
    return (s[s.length - count]).length
};