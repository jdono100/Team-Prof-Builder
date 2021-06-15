// Import roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import node packages
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { off } = require('process');

// Chalk shortcuts
const blue = chalk.blue;
const redBlueBg = chalk.red.bgBlue;

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
                    console.log(redBlueBg.underline('Please enter a name.'));
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
                    console.log(redBlueBg.underline('Please enter a number.'));
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
                    console.log(redBlueBg.underline('Please enter a valid email address.'));
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
                    console.log(redBlueBg.underline('Please enter a number.'));
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const managerInfo = new Manager(name, id, email, officeNumber);

        teamArr.push(managerInfo);
    })
};

const addTeamMembers = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMemberRole',
            message: redBlueBg.underline('Would you like to add more members to the team?'),
            choices: ['Add an engineer', 'Add an intern', 'Finish adding members']
        }
    ]).then(function(data) {
        switch (data.addTeamMembers) {
            case 'Add an engineer':
                askEngineerQns();
                break;
            case 'Add an intern':
                askInternQns();
                break;
            case 'Finish adding members':
                finishTeam();
        }
    })
}

function askEngineerQns() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: redBlueBg.underline("What is the engineer's name?"),
            validate: nameVal => {
                if (nameVal) {
                    return true;
                } else {
                    console.log(redBlueBg.underline('Please enter a valid name'));
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: redBlueBg.underline("What is the engineer's ID number?"),
            validate: idVal => {
                if (isNaN(idVal)) {
                    console.log(redBlueBg.underline('Please enter a number.'))
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: redBlueBg.underline("What is the engineer's email address?"),
            validate: emailVal => {
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const validateEmail = emailRegex.test(emailVal)
                if (validateEmail) {
                    return true;
                } else {
                    console.log(redBlueBg.underline('Please enter a valid email address.'));
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: redBlueBg.underline("What is the engineer's Github profile name?"),
            validate: githubVal => {
                if (githubVal) {
                    return true;
                } else {
                    console.log(redBlueBg.underline('Please enter a Github profile.'));
                }
            }
        }
    ])
}