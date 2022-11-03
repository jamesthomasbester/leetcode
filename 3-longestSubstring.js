// 3. Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }else{
        var length = 0;
        var map = []
        for (let i = 0; i < s.length; i++) {

            for(let n = 0; n < s.length; n++){
                if(s[i] != s[n]){
                    length +=1;
                }else{
                    map.push(s[i], length)
                    length = 0;
                }
                if(length == i - (s.length -1)){
                    map.push(s[i], length)
                    length = 0
                }
            }
        }
        console.log(map)
    }
};

lengthOfLongestSubstring('pwwkew')