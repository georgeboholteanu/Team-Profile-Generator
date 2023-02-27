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

