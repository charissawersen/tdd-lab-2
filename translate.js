let vowels = ['a', 'e', 'i', 'o', 'u'];
let newWord = "";

function translate(str)
{
    if (vowels.indexOf(str[0]) > -1)
    {
        newWord = str + 'way';
        return newWord;
    
} else {
    let matchVowels = str.match(/['a', 'e', 'i', 'o', 'u']/g) || 0; 
    //console.log(matchVowels);
    let firstVowel = str.indexOf(matchVowels[0]);
    //console.log(firstVowel);
    newWord = str.substring(firstVowel) + str.substring(0, firstVowel) + 'ay';
    //console.log(newWord);
    
    // str.substring(firstVowel) + str.substring(0, firstVowel) + 'ay';
    return newWord;
}}
//console.log(translate('scared'));