/**
 * Inheritance enables new objects to acquire the properties of 
 * existing objects
 */
function Programmer() {
    this.knowlLanguage = "";
}

Programmer.prototype = new Person();

var programmer  = new Programmer();