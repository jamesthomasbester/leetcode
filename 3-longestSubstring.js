// 3. Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var memory = []
    var length = 0;
    for (let i = 0; i < s.length; i++) {
        console.log("current string: " + s[i])
        for (let n = 0; n < memory.length; n++) {
            console.log("current memory: " + memory[n])
            if(memory[n] != s[i]){
                length += 1;
                console.log(length)
            }else{
                length = 1;
                console.log(length)
            }
            
        }
        memory.push(s[i])
    }
};

lengthOfLongestSubstring('pwwkew')