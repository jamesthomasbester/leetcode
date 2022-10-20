// 14. Longest Common Prefix - https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var result = ''
var accendingStrs = strs.sort((x, y) =>{
    return x.length - y.length;
})
console.log(accendingStrs)
const loopCheck = () =>{
    for (let i = 0; i < accendingStrs.length; i++) {
        if(accendingStrs[i].startsWith(accendingStrs[0]) || accendingStrs[0] == ""){
            result = accendingStrs[0]
        }else{
            accendingStrs[0] = accendingStrs[0].slice(0, -1);
            loopCheck()                                                                                                           
        }
        
    }

}
loopCheck();
return result;
};