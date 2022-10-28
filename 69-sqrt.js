// 69. Sqrt(x) - https://leetcode.com/problems/sqrtx/
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let root = 0;
    while (root * root <= x){
        root += 1;
    }
    return root - 1;
};

console.log(mySqrt(9))