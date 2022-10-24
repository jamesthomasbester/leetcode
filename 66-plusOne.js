// 66. Plus One - https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let count = digits.length -1
    if(digits[count] != 9){
        digits[count] += 1
    }else{
        while(digits[count] == 9){
            digits[count] = 0
            if(count == digits.length){
                digits.push(0)
            }else{
            digits[count + 1] = 0
            }
            count--
        }
    }
    return digits
};

console.log(plusOne([8,9,9]))