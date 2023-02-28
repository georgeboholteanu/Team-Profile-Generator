const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    async getDetails() {
        await super.getDetails();
        const { school } = await inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
        });
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