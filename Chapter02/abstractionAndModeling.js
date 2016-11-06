/**
 * Association is a relationship between two or mor objects where each 
 * object is independent of each other. 
 * This means that an object can exist without the other and no object
 * owns the other.
 */
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.parent = null;
}

var johnSmith = new Person("John", "Smith");
var fredSmith = new Person("Fred", "Smith");

fredSmith.parent = johnSmith;

/**
 * Aggregation is a especial form of association relationship where
 * an object has a major role than the other one. Usually, this major
 * role determines a sort of ownership of an object in relations to
 * the other.
 * The owner object is often called aggregate and the owned object is
 * called component.
 * However, each object has an independent life
 */
var company = {
    name: "ACME Inc.",
    employees: []
};

var marioRossi = new Person("Mario", "Rossi");

company.employees.push(johnSmith);
company.employees.push(marioRossi);

/**
 * Composition is a strong type of Aggregation, where each component
 * object has no independent life without its owner, the aggregate
 */
var person = {
    name: "John",
    surname: "Smith",
    address: {
        street: "123 Duncannon Street",
        city: "London",
        country: "United Kindom"
    }
};