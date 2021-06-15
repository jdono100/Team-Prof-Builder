// Import base Employee constructor
const Employee = require('./Employee');

// Set up engineer class
function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
}

// Extend employee
Engineer.prototype = Object.create(Employee.prototype);

// Functions to update data
Engineer.prototype.getRole = function() {
    return 'Engineer';
}
Engineer.prototype.getGithub = function() {
    return `Github: <a href="https://github.com/${this.github}">${this.github}</a>`;
}
Engineer.prototype.getColorAndIcon = function() {
    this.color = 'amber';
    this.icon = 'engineering';
    return this.color, this.icon
}

// Export
module.exports = Engineer;