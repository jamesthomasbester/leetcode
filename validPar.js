var isValid = function(s) {
    if(s.match(/((\(\)|\{\}|\[\]|\{(\[\])\}|\{(\(\))\}|\{(\{\})\}))/g)){
        return true;
    } 
    else{
        return false;
    }
};

console.log(isValid('{ }[ ]'))
