class Players {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /** 
    * Creates the token objects for our players
    * @param {integer} num - Number of token objects to be created 
    * @returns {array} an array of the newly created token objects
    */
   createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
        let token = new Token(i, this);
        tokens.push(token);
    }

    return tokens;
}

    /**
     * Gets all tokens that have not been dropped yet.
     * @return {array} - Array of unused tokens.
     */
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    /**
     * Gets the active token by returning the first token in the array of unused tokens.
     * @return {Object} - First token object in the array of unused tokens.
     */
    get activeToken() {
        return this.unusedTokens[0];
    }

    /**
     * Gets all tokens that have not been dropped
     * @return {array} - Array of unused tokens
     * The filter method is called on an array and is passed to test, and returns another array any elements from the original array that passed our test, which is any token property that does not equal true.
     * We are calling it on the players tokens property, which is holding an array of every token object belonging to the player.
     * Could also use a for loop to find the non-dropped tokens and pushed them onto an array.
     */
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    /**
     * Gets the active token by returning the first token in the array of unused tokens.
     * @return {Object} - First token object in the array of unusedTokens array we just created.
     * Everytime the player takes a turn, our getter method grabs the first token object in this array.
     */
    get activeToken() {
        return this.unusedTokens[0];
    }

    /**
     * checkTokens() method
     * Check if a player has any undropped tokens available
     * @return {Boolean} - returns a boolean value indicating wether or not the Player has any remaining tokens. 
     */
}