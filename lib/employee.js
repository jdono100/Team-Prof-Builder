// Base employee constructor with only the role passed in
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
};

// Prototype functions to populate information
Employee.prototype.getName = function() {
    return this.name;
};
Employee.prototype.getId = function() {
    return this.id;
}
Employee.prototype.getEmail = function() {
    return this.email;
}
Employee.prototype.getRole = function() {
    return "Employee";
}

// Export the base constructor file
module.exports = Employee;