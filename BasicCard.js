var BasicCard = function(front, back) {
    //the 'if' statement makes this a scope-safe constructor
    if (!(this instanceof BasicCard)) { 
        return new BasicCard(front, back);
    }
    this.front = front; 
    this.back = back; 
}

module.exports = BasicCard;