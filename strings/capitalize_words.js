// Write code that capitalizes the words in the string 
// 'launch school tech & talk', so that you get the string 
// 'Launch School Tech & Talk'

let text = 'launch school tech & talk';
let words = text.split(' ');
let wordsCapitalized = words.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase());
let textCapitalized = wordsCapitalized.join(' ');

console.log(textCapitalized);
