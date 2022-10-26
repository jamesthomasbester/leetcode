// 66. Plus One - https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let count = digits.length -1
    let addition = 0
    while(digits[count] == 9){
        console.log(digits[count])
        if(count == 0 ){
            digits[count] = 1
            digits.push(0)
        }else if(digits[count-1] != 9){
            digits[count] = 0
            digits[count - 1] = digits[count - 1] + 1
            count--
        }else{
            digits[count] = 0
            count--
        }

    }
    return digits
};

console.log(plusOne([8,9,9]))