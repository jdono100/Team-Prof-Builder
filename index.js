// Import roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import HTML generation file
const genHTML = require('./src/genHTML');

// Import node packages
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Chalk shortcuts
const blue = chalk.blue;
const redBlueBg = chalk.red.bgBlue;
const green = chalk.green;

// Empty array to be filled with the team
const teamArr = [];

// Prompt starts
const startQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: redBlueBg.underline('Who is the manager of this project?'),
            validate: nameVal => {
                if (nameVal) {
                    return true;
                } else {
                    console.log(blue.inverse('Please enter a name.'));
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: redBlueBg.underline("What is the manager's ID number?"),
            validate: idVal => {
                if (isNaN(idVal)) {
                    console.log(blue.inverse('Please enter a number.'));
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: redBlueBg.underline("What is the manager's email?"),
            validate: emailVal => {
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const validateEmail = emailRegex.test(emailVal)
                if (validateEmail) {
                    return true;
                } else {
                    console.log(blue.inverse('Please enter a valid email address.'));
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: redBlueBg.underline("What is the manager's office number?"),
            validate: offNumVal => {
                if (isNaN(offNumVal)) {
                    console.log(blue.inverse('Please enter a number.'));
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(managerInput => {
        const { managerName, managerId, managerEmail, officeNumber } = managerInput;
        const managerInfo = new Manager(managerName, managerId, managerEmail, officeNumber);

        console.log(green.dim(managerInfo))
        teamArr.push(managerInfo);
    })
};

const addTeamMembers = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMemberRole',
            message: redBlueBg.underline('Please select an employee.'),
            choices: ['Add an engineer', 'Add an intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: redBlueBg.underline("What is the employee's name?"),
            validate: nameVal => {
                if (nameVal) {
                    return true;
                } else {
                    console.log(blue.inverse('Please enter a valid name'));
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: redBlueBg.underline("What is the employee's ID number?"),
            validate: idVal => {
                if (isNaN(idVal)) {
                    console.log(blue.inverse('Please enter a number.'))
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: redBlueBg.underline("What is the employee's email address?"),
            validate: emailVal => {
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const validateEmail = emailRegex.test(emailVal)
                if (validateEmail) {
                    return true;
                } else {
                    console.log(blue.inverse('Please enter a valid email address.'));
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: redBlueBg.underline("What is the engineer's Github profile name?"),
            when: input => input.role === 'Engineer',
            validate: githubVal => {
                if (githubVal) {
                    return true;
                } else {
                    console.log(blue.inverse('Please enter a Github profile.'));
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: redBlueBg.underline("Where does (did) the intern go to school?"),
            when: input => input.role === 'Intern',
            validate: schoolVal => {
                if (schoolVal) {
                    return true;
                } else {
                    console.log(blue.inverse('Please enter a school.'))
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: redBlueBg.underline('Would you like to add another employee?')
        }
    ]).then(function(data) {
        let { employeeName, employeeId, employeeEmail, role, engineerGithub, internSchool, addAnotherEmployee } = data;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer(employeeName, employeeId, employeeEmail, engineerGithub);
            console.log(green.dim(employee));
        } else if (role === 'Intern') {
            employee = new Intern(employeeName, employeeId, employeeEmail, internSchool);
            console.log(green.dim(employee))
        }

        teamArr.push(employee);

        if (addAnotherEmployee) {
            return addTeamMembers(teamArr);
        } else {
            return teamArr;
        }
    })
}

// Function to write html page
const writeHtml = (data) => {
    fs.writeFile('./dist/index.html', data, err => err ? console.error(err) : console.log(redBlueBg.underline('Successfully generated HTML in /dist!')));
}

startQuestions()
    .then(addTeamMembers)
    .then(teamArr => {
        return genHTML(teamArr);
    }).then(html => {
        return writeHtml(html);
    }).catch(err => console.error(err));