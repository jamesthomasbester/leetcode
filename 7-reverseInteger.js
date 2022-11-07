// 7. Reverse Integer - https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x.length > 9){
        return 0
    }
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
    return returnArray.join("")
};

reverse(-10110)
