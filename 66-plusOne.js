// 66. Plus One - https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let count = digits.length -1
    if (digits[count] != 9){
        digits[count] += 1
    }else if(digits.length == 1 && digits[count] == 9){
        console.log('test')
        digits[count] = 1
        digits.push(0)
    }else{
        while (digits[count] == 9) {
            digits[count] = 0
            if(digits[count - 1] != 9){
                digits[count - 1] += 1
            }else if(digits[count - 1] == 9 && count == 1){
                digits[count - 1] = 1
                digits.push(0)
            }else{
                count--
            }
        }
    }
    return digits
};

console.log(plusOne([9]))