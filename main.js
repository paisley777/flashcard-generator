var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard('Who was the first president of the United States?', 'George Washington');
var firstPresidentCloze = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

console.log('BASIC CARD FRONT: ' + firstPresident.front);
console.log('BASIC CARD BACK: ' + firstPresident.back);

console.log('CLOZE: ' + firstPresidentCloze.cloze);
console.log('FULL TEXT: ' + firstPresidentCloze.fullText);
console.log('PARTIAL TEXT: ' + firstPresidentCloze.partial(firstPresidentCloze.fullText, firstPresidentCloze.cloze));