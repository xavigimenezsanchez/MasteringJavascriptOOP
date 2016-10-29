function Person(name, surname) {
    "use strict"
    this.name = name;
    this.surname = surname;
    this.address = "";
    this.email = "";

    this.getFullName = function () {
        return this.name + " " + this.surname;
    }
}

var johnSmith = new Person("John", "Smith");

var xaviGimenez = new Person("Xavi", "Giménez");

// Use of Object()

var person = new Object({ name: "Peter", surname: "Parker", address: "", email: "" });

var person2 = {}
var person3 = Object();
console.log(person.constructor == Object); // result: true
console.log(person2.constructor == Object); // result: true
console.log(person3.constructor == Object); // result: true

// More Object() examples

var number = new Object(2);
var anotherNumber = new Object(3 * 2);
var string = new Object("test");




console.log(johnSmith.getFullName());
console.log(xaviGimenez.getFullName());
console.log(person.name + " " + person.surname);

