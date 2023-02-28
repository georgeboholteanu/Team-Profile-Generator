const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email, 'engineer');
        this.githubUsername = githubUsername;
    }

    async getDetails() {
        await super.getDetails();
        const { githubUsername } = await inquirer.prompt({
        type: 'input',
        name: 'githubUsername',
        message: 'What is the engineer\'s GitHub username?',
        });
        this.githubUsername = githubUsername;
    }
}

module.exports = Engineer;