
//first attempt
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    if(beginWord === endWord) return 1;
    if(stringDifference(beginWord,endWord)) return 2;
    for(let i = 0;  i < wordList.length; i++){
        if(stringDifference(beginWord, wordList[i])){
            return 1 + ladderLength(wordList[i], endWord, wordList.slice(0,i).concat(wordList.slice(i + 1, wordList.length)));
        }
    }
    return 0;
};

function stringDifference(string1,string2){
    let counter = 0;
    for(let i = 0; i < string1.length; i++){
        if(string1[i] != string2[i]){
            counter += 1;
        }
    }
    if(counter === 1){
        return true;
    }else{
        return false;
    }
}