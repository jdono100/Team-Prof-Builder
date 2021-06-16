// Import employee constructor
const Employee = require('./Employee');

// // Create intern class
// function Intern(name, id, email, school) {
//     Employee.call(this, name, id, email);
//     this.school = school
// }

// // Extend employee
// Intern.prototype = Object.create(Employee.prototype);

// // Functions to populate data
// Intern.prototype.getRole = function() {
//     return 'Intern';
// }
// Intern.prototype.getSchool = function() {
//     return this.school;
// }

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;