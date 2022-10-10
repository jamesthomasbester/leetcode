/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var output = 0;
    var array = [
        {key: 'I', value: 1},
        {key: 'V', value: 5}
    ]
    output = array.get('I')
    return output
};

console.log(romanToInt('IV'))