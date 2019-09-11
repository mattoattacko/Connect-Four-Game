class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        // Tells us what column a token is in. Starts at zero because all tokens first appear on the left most column of the board. Updated with "moveLeft/Right" methods.
        this.columnLocation = 0;
    }

    /**
     * Gets associated htmlToken.
     * @return {element} - html element associated with token object.
     */
    get htmlToken() {
        return document.getElementById(this.id);
    }

    /**
     * Gets left offset of html element.
     * @return {number} - Left offset of Token object's "htmlToken".
     */
    get offsetLeft() {
        // The html token is accessed via the htmlToken getter method, which will return the html element. This allows us to access the value of the elements "offsetLeft" property.
        return this.htmlToken.offsetLeft;
    }

    /**
     * Draws new HTML token.
     */
    drawHTMLToken() {
        //Create a div element and save it to a variable.
        const token = document.createElement('div');
        // Append this element to the existing HTML element with the id of "game-board-underlay".
        document.getElementById('game-board-underlay').appendChild(token);
        // Using the DOM method, "setAttribute()", add an "id" attribute to the newly created element, with a value equal to the Token object's "id" property. This is how our visual representation of the tokens - the HTML elements - will be tied to the JavaScript Token objects.
        token.setAttribute('id', this.id);
        // Using the DOM method, "setAttribute()", add a "class" attribute to the newly created element, with a value equal to the word "token". The CSS included for this project already has the styles coded for any HTML element with a class of "token".
        token.setAttribute('class', 'token');
        // Set the background color of the token element equal to the Token object's owner's color property.
        token.style.backgroundColor = this.owner.color;
    }

    /**
     * Moves html token one column to the left.
     */
    moveLeft() {
        // Checks to make sure we are not at 0, the most left location on the board we can be.
        if (this.columnLocation > 0) {
            // Updates the left position of the html token element. 76 is the pixel width of a column. 
            this.htmlToken.style.left = this.offsetLeft - 76;
            // Updates columnLocation property. We subtract 1 from whatever its current value is to signify that the token has moved one column to the left. 
            this.columnLocation -= 1;
        }
    }

    /**
     * Moves html token one column to right. 
     * @param {number} columns - number of columns on the game board
     * When the moveRight method is called from inside the Game class, the value for the number of columns will be passed in. 
     * We use this value to determine if the token is in the last (right most) column. 
     * If the token is in the last column, we don't want it to move any further right. 
     */
    moveRight(columns) {
        // our "columnLocation" counter starts at zero, not one. So we check to see if the "columnLocation" is less than the total number of columns minus one. 
        if (this.columnLocation < columns - 1) {
            // We update the value of the left position of the html token. We add 76pix so we move the html token further to the right on the board. 
            this.htmlToken.style.left = this.offsetLeft + 76;
            // we update the "columnLocation" prop so that it's increaed by one to signify that the token has moved one column to the right.
            this.columnLocation += 1;
        }
    }

    /**
     * Ideas for the drop() method
     * Drops html token into the target board space.
     * @param {Object} target - is the actual Space object the Token is beign dropped into. Target is the argument and is the Space object the Token is being dropped into.
     * @param {function} reset - The reset function to call after the drop animation has completed. Reset is the argument and is a callback function we will write later. 
     */
    drop(target, reset) {
        // Sets our active token's dropped property to true so that when the game needs to find the active players unused tokens, "this" token will no longer be included. 
        this.dropped = true;

        // We use jQuery to animate the htmlToken falling into the targeted space.
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }
}