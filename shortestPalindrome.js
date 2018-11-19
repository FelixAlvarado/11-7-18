var shortestPalindrome2 = function(s) {
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

function isMainCenter(s, start, end) {
    while (s[start] == s[end]) {
        if (start === 0) {
            return true;
        }
        start-=1; end+=1;
    }
    return false;
}

var shortestPalindrome = function(s) {
    if (s.length < 2) 
        return s;

    var start = 0, end = 0, center = 0;
    var isEven = false;
    var middle = parseInt(s.length/2);

    // find search_start and search_end for reducing searching area by skipping duplicated chars.
    var search_start = 0;
    var search_end = middle;
        
    while (s[search_start] == s[s.length-1-search_start] && s[search_start] == s[search_start+1]) {
        if (search_start > middle) {
            return s;
        }
        search_start++;
    }
    while (s[search_end] == s[s.length-search_end] && s[search_end-1] == s[s.length-search_end]) {
        search_end--;
    }
    if (search_end < middle) {
        search_end++;
    }
    if (search_start > 0) {
        search_start = parseInt(search_start/2);
    }

    for (var i=search_end;i>=search_start;i--) {

        // if it did reduced searching point from start, then skip the duplicated make it closer to search_start
        while (search_start>0 && i>search_start+1 && i<search_end-1 && s[i]==s[i-1] && s[i]==s[i+1]) {
            i--;
        }

        // check if i is main canter
        start = i, end = i;
        if ((s.length%2===0 || i<parseInt(s.length/2)) && isMainCenter(s, start, end+1)) {
            isEven = true;
            center = i;
        } else if (isMainCenter(s, start, end)) {
            isEven = false;
            center = i;
        }
        
        if (center > 0) {
            break;
        }
    }
    
    var extraText = "";

    // Add mid to tail to the front
    var tail = (center+1)*2-1;
    if (isEven === false) {
        tail -= 1;
    }
    if (tail === 0 && s[0] == s[1] && s[0] == s[s.length-1]) {
        tail = 1;
    }
    for (var i=s.length-1;i>tail;i--) {
        extraText += s[i];
    }

    return extraText + s;
};

console.log(shortestPalindrome('abcd'));
