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

// gather information about the development team members, and render the HTML file.
const init = () => {
    let fullResponse = []; 

    inquirer
    .prompt([
        {            
            type: 'input',
            message: "Team manager name",
            name: 'managerName',
            suggestions: ['Oliver', 'Luna', 'Charlie', 'Bella', 'Max', 'Lucy'],            
        },
        {            
            type: 'input',
            message: "Team manager ID",
            name: 'managerId'
        },
        {            
            type: 'input',
            message: "Team manager email",
            name: 'managerEmail'
        },
        {            
            type: 'input',
            message: "Team manager office number",
            name: 'managerNo'
        },
        {            
            type: 'list',
            message: "Want tot add someone else?",
            name: 'addTeamMember',
            choices: ['Engineer', 'Intern', 'I don\'t want to add anyone'],
        },       
        
    ])
    .then((answers) => {       
        if (answers.addTeamMember === 'Engineer') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Engineer name",
                    name: 'engineerName'
                },
                {
                    type: 'input',
                    message: "Engineer ID",
                    name: 'engineerId'
                },
                {
                    type: 'input',
                    message: "Engineer email",
                    name: 'engineerEmail'
                },
                {
                    type: 'input',
                    message: "Engineer github username",
                    name: 'engineerGithub'
                }
            ])
            .then((answers2) => {
                fullResponse.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNo))
                fullResponse.push(new Engineer(answers2.engineerName, answers2.engineerId, answers2.engineerEmail, answers2.engineerGithub));
                // console.log(fullResponse);
            })          
        } else if (answers.addTeamMember === 'Intern') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Intern name",
                    name: 'internName'
                },
                {
                    type: 'input',
                    message: "Intern ID",
                    name: 'internId'
                },
                {
                    type: 'input',
                    message: "Intern email",
                    name: 'internEmail'
                },
                {
                    type: 'input',
                    message: "Intern school",
                    name: 'internSchool'
                }
            ])
            .then((answers2) => {
                fullResponse.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNo))
                fullResponse.push(new Intern(answers2.internName, answers2.internId, answers2.internSchool));
                // console.log(fullResponse);
            })

        } else if (answers.addTeamMember === 'I don\'t want to add anyone') {
            console.log("I don't want to add anyone");
        }      
        
    
    })
    .then(() => {
        // writeToFile(fullResponse)
        console.log(fullResponse);
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

