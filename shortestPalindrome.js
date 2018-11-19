var shortestPalindrome = function(s) {
    let length = ['',''];
    let mid = Math.floor(s.length / 2);
    if(s.split('').every((letter) => letter === s[0])) return s;
    for(let i = 0; i <= s.length / 2 - 1; i++){
        let string1 = s.slice(0,i + 1);
        let string2 = s.slice(i + 1, s.length);
        let string3 = s.slice(i + 2, s.length);

        if(string1.length > length[0].length && stringComparison(string1,string3)){
            length = [string1,string3];
        } else if(string1.length > length[0].length && stringComparison(string1,string2)){
            length = [string1,string2];
        }
        
    }
    console.log('length',length);
    if(length[0].length > 0){
        return length[1].slice(length[0].length).split('').reverse().join('') + s;
    }else {
        return s.slice(1).split('').reverse().join('') + s;
    }
};

function stringComparison(string1, string2){
    string1 = string1.split('').reverse().join('');
    for(let i = 0; i < string1.length; i++){
        if(string1[i] != string2[i]){
            return false;
        }
    }
    return true;
}

console.log('should be bcbcb', shortestPalindrome('cbcb'));