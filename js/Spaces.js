class Spaces {
    constructor(){
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }
}

/**
 * Add two properties in the Space class constructor method: diameter and radius. Set the value of the diameter property equal to 76. The radius property should be equal to half the value of the diameter property.
 * Create a method inside the Space class called drawSVGSpace() using the requirements and guidelines below.
 */

/**
 * drawSVGSpace() method should...
 * receive no arguments.
 * not return anything.
 * Inside the method, create a circle SVG element and save it a variable. Then add several important attributes to the SVG element. Finally, you'll append the SVG element to a container element that already exists in the HTML.
*/

// creates the SVG element inside the method
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
