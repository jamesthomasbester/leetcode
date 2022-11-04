// 7. Reverse Integer - https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let array = Array.from(String(x), Number)
    let returnArray = []
    for (let i = array.length-1; i >= 0; i--){
        console.log(i)
       if(i != array.length-1 && array[i] != 0){
            console.log("push")
            returnArray.push(array[i])
       }
    }
    console.log(returnArray)
};

reverse(1011)