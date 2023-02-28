const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.githubUsername;
    } 
    async getDetails() {
        await super.getDetails();
        // await super.getRole();
        const { githubUsername } = await inquirer.prompt({
        type: 'input',
        name: 'githubUsername',
        message: 'What is the engineer\'s GitHub username?',
        // validate: (answer) => {
        //     const emailRegex = /^[^\s@]+@github.com/
        //     if(!emailRegex.test(answer)) {
        //         return "You have to provide a valid email address!"
        //     }
        //     return true
        // },
        });
        this.githubUsername = githubUsername;
    }
}

module.exports = Engineer;