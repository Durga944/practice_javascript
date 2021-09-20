var allAnagrams = function(string) {

    function findAnagrams(start, stringRemainder) {
    if (stringRemainder.length === 1) {
    return [start + stringRemainder];
    } else {
    let results = [];
    for (let i = 0; i < stringRemainder.length; i++) {
    let anagram = findAnagrams(stringRemainder[i], stringRemainder.substr(0, i) + stringRemainder.substr(i + 1));
    for (let j = 0; j < anagram.length; j++) {
    results.push(start + anagram[j]);
    }
    }
    
    return results;
    }
    }
    
    return findAnagrams('', string);
    };
    
    var anagrams = allAnagrams('abc');
    console.log(anagrams);
    
