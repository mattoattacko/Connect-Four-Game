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
}