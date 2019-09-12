class Spaces {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter / 2;
    }

    /**
     * Draws SVG space
     * creates the SVG element inside the method
     * drawSVGSpace() method should receive no arguments and not return anything.
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
     * mark() method ideas
     * Updates space to reflect a token has been dropped into it. 
     * @param {Object} token - The dropped token
     * method returns nothing
     * method should set the Space object's token property to the Token object passed to the method.
     */

    /**
     * Ideas for getther method owner()
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

}

/**
 * Add two properties in the Space class constructor method: diameter and radius. Set the value of the diameter property equal to 76. The radius property should be equal to half the value of the diameter property.
 * Create a method inside the Space class called drawSVGSpace() using the requirements and guidelines below.
 */