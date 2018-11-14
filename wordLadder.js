
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





//solution
var getMapKeys = function(word) {
    var keys = [];
    for(var i = 0; i < word.length; i++) {
        keys.push(word.substring(0, i) + " " + word.substring(i + 1)); // Generate key = prefix + ' ' + subfix
    }     
    return keys;
}

var ladderLength = function(beginWord, endWord, wordList) {
   var adjacentMap = {};
    var hasEndWord = false;
    
/*	Build map.
The map expresses relationship between words those share common subfixes and prefixes.
In another word, those are relationships (edges) on the graph of words (vertices)
e.g : "hit" and "hot" share "h t", 'log' and 'cog' share ' og'
*/
    for(var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        hasEndWord = hasEndWord || (word === endWord);
        var keys = getMapKeys(word);
        for(var j = 0; j < keys.length; j++) {
            var key = keys[j];
            if (adjacentMap[key]) adjacentMap[key].push(word);
            else adjacentMap[key] = [word];
        }
    }        
   
    if (!hasEndWord) return 0;
    
    var queue = [beginWord];    
    var count = 1; 
    var visited = { [beginWord] : true };
	

// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.	
// BFS on the map
    while (queue.length > 0) {
        var nextQueue = []; 
        count++;
        while (queue.length > 0) {
            var word = queue.shift();
            var keys = getMapKeys(word);            
            for(var i = 0; i < keys.length; i++) {
                var key = keys[i];  
                
                var subset = adjacentMap[key];                            
                if (!subset) continue;
                
                for(var j = 0; j < subset.length; j++) {
                    var subWord = subset[j];
                    
                    if (visited[subWord]) continue;                    
                    visited[subWord] = true;
                    
                    if (subWord === endWord) return count;
                    else nextQueue.push(subWord);
                }
            }
        }
        queue = nextQueue;
    }
    
    return 0;

}