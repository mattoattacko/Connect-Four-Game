class Spaces {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter/2;
    }

    /**
     * Getther method owner()
     * Checks if space has an associated token to find its owner
     * Recieves no arguments 
     * @return {null|Object} Returns null or the owner object of the space's associated token. 
     * Check to see if a Space object has an occupying Token object. If it does not, return null. else return the owner of the Token object. 
     */
    get owner() {
        if (this.token === null) {
            return null;
        } else {
            return this.token.owner;
        }
    }

    /**
     * Draws SVG space
     * creates the SVG element inside the method
     * drawSVGSpace() method receives no arguments and does not return anything.
     */
    drawSVGSpace() {
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        // Uses the DOM method 'setAttributeNS()' to set several attributes to the element stored in the svgSpace variable.
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");

        // completed svgSpace element should be attached to the DOM. 
        document.getElementById("mask").appendChild(svgSpace);
    }

    /**
     * The mark() method updates space to reflect a token has been dropped into it. 
     * @param {Object} token - The dropped token
     * method returns nothing
     * method sets the Space object's token property to the Token object passed to the method.
     * purpose of this method is to change a given Space object's token property so it's set to the token object that was dropped into it.
     */
    mark(token) {
        // this updates the property value
        this.token = token;
    }
}