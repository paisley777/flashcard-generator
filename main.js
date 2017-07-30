var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

//constructors called without use of the word "new" keyword
var firstPresident = BasicCard('Who was the first president of the United States?', 'George Washington');
var firstPresidentCloze = ClozeCard('George Washington was the first president of the United States.', 'George Washington');
var brokenClozeCard = ClozeCard('George Washington was the first president of the United States.', 'John Adams');

console.log('\n-----This is a BASIC CARD-----')
console.log('BASIC CARD FRONT: ' + firstPresident.front);
console.log('BASIC CARD BACK: ' + firstPresident.back);

console.log('\n-----This is a CLOZE CARD-----')
console.log('CLOZE: ' + firstPresidentCloze.cloze);
console.log('PARTIAL TEXT: ' + firstPresidentCloze.partial(firstPresidentCloze.fullText, firstPresidentCloze.cloze));
console.log('FULL TEXT: ' + firstPresidentCloze.fullText);

console.log('\n-----This is a BROKEN CLOZE CARD-----')
console.log('CLOZE: ' + brokenClozeCard.cloze);
console.log('PARTIAL TEXT: ' + brokenClozeCard.partial(brokenClozeCard.fullText, brokenClozeCard.cloze));
console.log('FULL TEXT: ' + brokenClozeCard.fullText);

