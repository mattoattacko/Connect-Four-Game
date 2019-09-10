// Here is where we will build the interactive portion of our game, where the DOM meets the objects. 
// We will use this file to initialize the Game objects and listen for user triggered events (eg: mouse clicks or key presses)

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

// Event listener should listen for a click event on the #begin-game button.
// Event listener should have a callback function that calls the startGame() method on the newly created Game object

const game = new Game();

document.getElementById('begin-game').addEventListener('click', function() {
    game.startGame();

    // Inside the callback function, hid the start button and show the game board. 
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listens for keyboard presses
 * Callback function in the event listener receives the event object as an argument. 
 * Inside the callback, we call the "handleKeydown" method on the Game object and pass in that event.
 */
document.addEventListener('keydown', function(event) {
    game.handleKeydown(event);
});