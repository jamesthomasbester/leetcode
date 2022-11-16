// 7. Reverse Integer - https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let negative = false;
    let array = Array.from(String(x), Number)
    let returnArray = []
    if(x < 0){
        negative = true;
        array.shift()
    }
    if(negative){
        returnArray.push("-")
    }
    for (let i = array.length-1; i >= 0; i--){
       if(array[i] == 0 && i == array.length-1){
            
       }
       else{
            returnArray.push(array[i])
       }
    }
    if(returnArray.join("") > 2147483647 || returnArray.join("") < -2147483647){
        return 0
    }else{
        return returnArray.join("")
    }
    
};

console.log(reverse(1534236469))
