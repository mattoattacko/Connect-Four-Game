class Game {
    constructor() {
        // Board object initialized 
        // When a new game is created, so is a new "board" object, and that "board" object is stored in the Games "board" property.
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Getter method returns active player
     * @return {Object} player - The active player
     * We use array method 'find' instead of 'filter'. 'Filter' would return an array of every element that passes the provided test, and since we are only looking for a single value here, we use 'find' to simply return the first/only element that passes the test.
     * Our test condition here is wether or not the Player objects active property = true?
     * We call 'find' on the Game objects 'players' property which holds an array of the games players.
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    /**
     * Creates two player objects
     * @return {array}  an array of two player objects
     */
    createPlayers() {
        const players = [new Players('Player One', 1, '#e15258', true),
                         new Players('Player Two', 2, '#e59a13')];

        return players;
    }
    
    /**
     * Gets game ready for playing
     */
    startGame() {
        // we want to access the board object inside the Game class. 
        // draws the board in the browser.
        this.board.drawHTMLBoard();
        // this.activePlayer will return the player whos turn it is. Adding .activeToken returns the Token object that is now in play. 
        this.activePlayer.activeToken.drawHTMLToken();
        // sets the games ready property to true.
        this.ready = true;
    }

    /**
     * Ideas for handleKeydown() method
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     * This method should receive the keydown event as an argument.
     * This method should not return anything.
     * This method should test to see if the Game is ready, using the Game object's ready property.
     * If the game is ready, this method should check for a key value of ArrowLeft, ArrowRight, or ArrowDown. This can be accomplished with an empty if...else conditional.
     */

    // Method receives the event object as argument. This is the event object that is passed to the event listener callback method in app.js
    handleKeydown(e) {
        // Checks if game is ready. Our Game object has a "ready" property that holds a true or false value
        if (this.ready) {
            // Checks event objects "key" property, which returns a string of the name of the key that was pressed
            if (e.key === "ArrowLeft") {
                // If it was a left arrow, we call the moveLeft method on activeToken, which is accessed as a property on the activePlayer object, which because of our getter method is accessed as a property of our Game object. 
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                // When we call moveRight, we have to pass in the number of columns, accessed by "this.board.columns". The board object is held in a prop of the game object. The board object has a prop called "columns" where the number of columns is set. 
                // We pass in this value rather than a static value inside the method because we might want to refactor our game in the future to allow further user customization. 
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                // play token
            }
        }
    }
}