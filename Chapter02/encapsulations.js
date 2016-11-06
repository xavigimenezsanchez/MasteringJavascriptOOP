/**
 * Encapsulation principle allows an onbjec to expose
 * just what is needed to uset it, hiding the 
 * complexity of its implementation.
 */

function Company(name) {
    var employees = [];

    this.name = name;

    this.getEmployees = function() {
        return employees;
    };
    this.addEmplyee = function(employee) {
        employees.push(employee);
    };
}

var company2 = new Company("ACME Inc.");