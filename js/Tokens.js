class Tokens {
    constructor() {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
}

/**
 * Add a method called drawHTMLToken() to the Token class using the requirements and guidelines below.
 * Add a getter method, htmlToken() to the Token class using the requirements and guidelines below.
 */

/**
 * "drawHTMLToken()" method...
 * Create a div element and save it to a variable.
 * Append this element to the existing HTML element with the id of "game-board-underlay".
 * Using the DOM method, "setAttribute()", add an "id" attribute to the newly created element, with a value equal to the Token object's "id" property. This is how our visual representation of the tokens - the HTML elements - will be tied to the JavaScript Token objects.
 * Using the DOM method, "setAttribute()", add a "class" attribute to the newly created element, with a value equal to the word "token". The CSS included for this project already has the styles coded for any HTML element with a class of "token".
 * Set the background color of the token element equal to the Token object's owner's color property.
 */

 /**
 * 
 * Getter method "htmlToken()"...
 * should return the HTML token element associated with the Token object.
 */