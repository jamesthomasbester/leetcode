// 20. Valid Parentheses - https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let comparitor = ['[','{','('];
    let bracketMap = new Map();
    bracketMap.set(']', '[');
    bracketMap.set('}', '{');
    bracketMap.set(')', '(');
    let stack = []
    for (let i = 0; i < s.length; i++){
        if (comparitor.includes(s[i])){
            stack.push(s[i])
        }else if(stack[stack.length-1] == bracketMap.get(s[i])){
            stack.pop();
            console.log(i)
        }else{
            stack.push(s[i])
        }
    }
    console.log(stack)
    if (stack.length == 0){
        return true;
    }else{
        return false;
    }
};

console.log(isValid("()[]"))
