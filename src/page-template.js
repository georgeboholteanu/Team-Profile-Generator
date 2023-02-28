const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// capitalize the first letter of each word in a string
const capitalizeFirstLetter = (string) => {
    if (string.split(" ").length === 1) {      
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        const stringArr = string.split(" ");
        return stringArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
}

// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${capitalizeFirstLetter(manager.name)}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${capitalizeFirstLetter(manager.role)}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${capitalizeFirstLetter(engineer.name)}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${capitalizeFirstLetter(engineer.role)}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.mail}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.githubUsername}" target="_blank" rel="noopener noreferrer">${engineer.githubUsername}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${capitalizeFirstLetter(intern.name)}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${capitalizeFirstLetter(intern.role)}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${capitalizeFirstLetter(intern.school)}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.role === "manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.role === "engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.role === "intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};