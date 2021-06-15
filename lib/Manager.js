// Import employee base constructor
const Employee = require("./Employee");

// New class for manager
function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber
}

// Extend employee with manager
Manager.prototype = Object.create(Employee.prototype)

// Have functions to update data when manager is selected
Manager.prototype.getRole = function() {
    return 'Manager';
}
Manager.prototype.getOfficeNumb = function() {
    return this.officeNumber;
}
Manager.prototype.getColorAndIcon = function() {
    this.color = 'orange';
    this.icon = 'groups';
    return this.color, this.icon;
}

// Export
module.exports = Manager