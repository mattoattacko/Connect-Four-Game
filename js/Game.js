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
     * @param   {Object} e - Keydown event object
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

    /**
     * Finds Space object to drop Token into, then drops Token
     */
    playToken() {
        // Spaces variable now holds a reference to the 2D array of Space objects representing the game board.
        let spaces = this.board.spaces;
        // Stores the activeToken
        let activeToken = this.activePlayer.activeToken;
        // Access the target column
        let targetColumn = spaces[activeToken.columnLocation];
        // assigned to null because at the beginning of the method, we don't have a target space yet. 
        let targetSpace = null;

        // Here is where we identify the targetSpace
        // iterates through the individual spaces objects in the targetColumn array
        for (let space of targetColumn) {
            // this tells us if the space is empty and is available to target
            if (space.token === null) {
                // we set the target space equal to that potential space
                targetSpace = space;
            }
            // at the end of this for loop, the targetSpace variable will hold the lowest empty space in that column, which is now our targetSpace
        }
        // If at the end of the loop, the targetSpace variable is still equal to null, that means the column is full and our for loop never found an empty space in the targetColumn. If so, nothing should happen. 
        // If that is not the case and we found a target space, then we set the games ready state to false (so the game can't continue until after the htmlToken is dropped) and call the drop method on the activeToken passing in the targetSpace as a parameter.  
        if (targetSpace !== null) {
            console.log('token played');
            const game = this;
            game.ready = false;

            activeToken.drop(targetSpace, function() {
                game.updateGameState(activeToken, targetSpace);
            });
        }
    }

    /**
     * Checks if there is a winner on the board after each token drop.
     * @param {Object} target - Targeted space for dropped token.
     * @return {boolean} Boolean value indicating wether the game has been won (true) or not (false).
     */
    checkForWin(target) {
        const owner = target.token.owner;
        let win = false;
        console.log('checkForWin called');
        
        // Vertical
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                console.log(x,y);
                console.log(y + 1);
                console.log(y + 2);
                console.log(y + 3);
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y+1].owner === owner &&
                    this.board.spaces[x][y+2].owner === owner &&
                    this.board.spaces[x][y+3].owner === owner) {
                        win = true;
                        console.log(win);
                }
            }
        }

        // Horizontal
        for (let x = 0; x < this.board.columns -3; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x+1][y].owner === owner && 
    				this.board.spaces[x+2][y].owner === owner && 
    				this.board.spaces[x+3][y].owner === owner) {
                        win = true;
                }
            }
        }

        // Diagonal
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y+1].owner === owner && 
    				this.board.spaces[x-2][y+2].owner === owner && 
    				this.board.spaces[x-3][y+3].owner === owner) {
                    	win = true;
                }           
            }
        }

        // Diagonal 
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 3; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y-1].owner === owner && 
    				this.board.spaces[x-2][y-2].owner === owner && 
    				this.board.spaces[x-3][y-3].owner === owner) {
                    	win = true;
                }       
            }
        }

        return win;
    }

    /**
     * switchPlayers() method - Switches active player
     * Method receives no arguments and does not return anything.
     * This method changes the value of the active property of each player. 
     * Inside this method, we want to iterate through the array of Players. 
     * For each Player object. switch the value of its "active" property.
     * If the "active" property is set to "true", it should now be set to "false" and vice versa.
     */
    switchPlayers() {
        for (let player of this.players) {
            // ternary expression 
            // "player.active === true" is our test/condition, and reads as "if the players active property equals true".
            // If the condition passes, return false. If it fails, return true. 
            player.active = player.active === true ? false : true;
        }
    }

    /**
     * Updates the game state after token is dropped.
     * @param {Object} token - The token that is being dropped.
     * @param {Object} target - Targeted space for dropped token.
     * Method needs to call the "mark()" method on the targeted Space object to associate it with the dropped Token.
     * Method then performs a check to see if the game was won. If won, "gameOver()" method is called. If not won, game switches players.
     * After player switch, game checks to ensure that the "activePlayer" still has available tokens. If there are available tokens, then draw a new "htmlToken" and set the game state to ready. If no tokens available, game is over.
     */

    /** 
     * gameOver() method - Displays the "Game Over" message and winner info
     * @param {string} message - "Game Over" message.
     * @return nothing
     * Our method receives one argument "message", a string value to display on screen when the game is over.
     * Inside of index.html there is an html element w/ the 'id' "game-over". This is the element that will hold the game over message.
     * The element's display property is set to "none".
     * To display the message, the display property must be set to "block" and the "textContent" property must be set equal to the message.
     */
    gameOver(message) {
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over').textContent = message;
    }
}