const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// write file with gathered information about team members
const writeToFile = team => {
    fs.writeFile(outputPath, render(team), (err) =>
    err? console.log(err) : console.log("Success!\n")
    );
};

// render the questions for the user
async function askQuestions() {
    const categoryChoices = ['Manager', 'Engineer', 'Intern'];

    const { category } = await inquirer.prompt({
        type: 'list',
        name: 'category',
        message: 'What type of employee do you want to add?',
        choices: categoryChoices,
    });

    // create new team member based on category selected
    let employee;
    switch (category) {
        case 'Manager':
        employee = new Manager();
        await employee.getDetails();
        break;
        case 'Engineer':
        employee = new Engineer();
        await employee.getDetails();
        break;
        case 'Intern':
        employee = new Intern();
        await employee.getDetails();
        break;
        default:
        console.error(`Invalid category "${category}"`);
        return;
    }

    const employees = [employee];

    const { addAnother } = await inquirer.prompt({
        type: 'confirm',
        name: 'addAnother',
        message: 'Add another employee?',
    });

    if (addAnother) {
        employees.push(...(await askQuestions()));
    }

    return employees;
}

// initialize the application
async function main() {
    const employees = await askQuestions();
    console.log(employees);
    writeToFile(employees);
}

main();
