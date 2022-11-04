// 3. Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }else{
        var n = 1;
        var map = []
        for (let i = 0; i < s.length; i++) {
            if(s[i] != s[i + n])
        }
        console.log(map)
    }
};

lengthOfLongestSubstring('pwwkew')