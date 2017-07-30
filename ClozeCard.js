var ClozeCard = function(text, cloze) {
    //the 'if' statement makes this a scope-safe constructor
    if (!(this instanceof ClozeCard)) { 
        return new ClozeCard(text, cloze);
    }
    this.fullText = text; 
    this.cloze = cloze;
    
    this.partial = function(text, cloze) {
        //search for the cloze phrase in the text string
        var brokenCloze = text.search(cloze);
        //if there is no match, log an error message
        if (brokenCloze === -1) {
            var error = 'Error! The cloze phrase doesn\'t exist in the statement.';
            return error;
        //otherwise replace the cloze statement with a blank 
        } else {
            var newString = text.replace(cloze, '....');
            return newString;
        }  
    }
}

module.exports = ClozeCard;
