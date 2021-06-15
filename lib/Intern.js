// Import employee constructor
const Employee = require('./Employee');

// Create intern class
function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school
}

// Extend employee
Intern.prototype = Object.create(Employee.prototype);

// Functions to populate data
Intern.prototype.getRole = function() {
    return 'Intern';
}
Intern.prototype.getSchool = function() {
    return this.school;
}
Intern.prototype.getColorAndIcon = function() {
    this.color = 'yellow';
    this.icon = 'supervisor_account';
    return this.color, this.icon;
}

module.exports = Intern;