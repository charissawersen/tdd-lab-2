let vowels = ['a', 'e', 'i', 'o', 'u']; 
let newString = ""; 

function translate (str) {
if(vowels.indexOf(str[0]) > -1) {
    newString = str + 'way'; 
    return newString; 
}
}