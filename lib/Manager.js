const inquirer = require('inquirer');
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    async getDetails() {
        await super.getDetails();
        const { officeNumber } = await inquirer.prompt({
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        });
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;