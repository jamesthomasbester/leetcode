var isPalindrome = function(x) {
    let mirror = '';
    let string = x.toString();
    for(let i = string.length-1; i >= 0; i--){
        mirror += string[i]
    }
    if(mirror == string){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome(1221))