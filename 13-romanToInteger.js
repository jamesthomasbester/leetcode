// 13. Roman to Integer - https://leetcode.com/problems/roman-to-integer/
/** 
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var output = 0;
    var prevousInputNumber = 0;
    
    for(let i = 0; i < s.length; i++){
        var currentInputNumber = 0;
            switch(s[i]){
                case 'I':
                    currentInputNumber += 1;
                    break;
                case 'V':
                    currentInputNumber += 5;
                    break;
                case 'X':
                    currentInputNumber += 10;
                    break;
                case 'L':
                    currentInputNumber += 50;
                    break;
                case 'C':
                    currentInputNumber += 100;
                    break;
                case 'D':
                    currentInputNumber += 500;
                    break;
                case 'M':
                    currentInputNumber += 1000;
                    break;
                default:
                    currentInputNumber += 0;
                    break;
        }
        if(prevousInputNumber < currentInputNumber){
            currentInputNumber = prevousInputNumber - currentInputNumber;
        }else if(prevousInputNumber > currentInputNumber){
            currentInputNumber = prevousInputNumber + currentInputNumber;
        }else{
            output += currentInputNumber
        }
        prevousInputNumber = currentInputNumber;
    } 
    return output;
};
console.log(romanToInt('IV'))