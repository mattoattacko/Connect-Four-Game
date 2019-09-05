class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
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
}
