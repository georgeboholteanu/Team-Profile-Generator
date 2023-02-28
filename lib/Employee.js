const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getRole() {
        return "Employee";
    }

    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    async getDetails() {
        const { name, id, email } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the ${this.getRole()}'s name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${this.getRole()}'s ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${this.getRole()}'s email address?`,
            // validate: (answer) => {
            //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            //     if(!emailRegex.test(answer)) {
            //         return "You have to provide a valid email address!"
            //     }
            //     return true
            // },
        },
        ]);
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;
