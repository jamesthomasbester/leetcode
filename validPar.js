var isValid = function(s) {
    if((s.includes('[') && !s.match(/\[(.*?)([^{^(^}^)])\]/)) || (s.includes('{') && !s.match(/\{(.*?)([^[^(^\]^)])\}/)) || (s.includes('(') && !s.match(/\((.*?)([^[^{^\]^}])\)/))){
        return false;
    } 
    else{
        return true;
    }
};

console.log(isValid('{ }[ ]'))