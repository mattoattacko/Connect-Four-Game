class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Returns active player
     * @return {Object} - Player = the active player
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
        
    }
}