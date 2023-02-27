const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    async getDetails() {
        const { name, id, email } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the ${this.role}'s name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${this.role}'s ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${this.role}'s email address?`,
        },
        ]);
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;
