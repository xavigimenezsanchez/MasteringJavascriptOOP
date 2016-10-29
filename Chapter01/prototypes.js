var andreuPerez = new Person("Andreu", "Perez");

// The flexibility of JavaScript objects offers the possibility of changing their
// structure even after thir creation

// This only changes the object andreuPerez
andreuPerez.greets = function () {
    console.log("I'm in andreuPerez.greets");
    return "Hello " + this.name + " " + this.surname + "!";
}

// If we want to change the structure of all Person objects

Person.prototype.greets = function () {
    return "Hello " + this.name + " " + this.surname + "!";
}


console.log(johnSmith.getFullName());
console.log(xaviGimenez.getFullName());

// A padding method available to all strings
String.prototype.padLeft = function (width, char) {
    var result = this;
    char = char || " ";

    if (this.length < width) {
        result = new Array(width - this.length + 1).join(char) + this;
    }
    return result;
}

console.log("abc".padLeft(10, "x"));  //"xxxxxxabc"