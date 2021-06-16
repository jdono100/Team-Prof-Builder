// Import base Employee constructor
const Employee = require('./Employee');

// // Set up engineer class
// function Engineer(name, id, email, github) {
//     super(name, id, email);
//     this.github = github;
// }

// // Extend employee
// Engineer.prototype = Object.create(Employee.prototype);

// // Functions to update data
// Engineer.prototype.getRole = function() {
//     return 'Engineer';
// }
// Engineer.prototype.getGithub = function() {
//     return `Github: <a href="https://github.com/${this.github}">${this.github}</a>`;
// }

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer'
    }
    getGithub() {
        return this.github;
    }
}

// Export
module.exports = Engineer;