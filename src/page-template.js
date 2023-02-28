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
            <div class="card border-dark bg-light m-2">
                <div class="card-body ">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="" alt="" class="rounded-circle p-1" width="110">
                        <div class="mt-3">
                            <h4>${capitalizeFirstLetter(manager.getName())}</h4>
                            <p class="text-secondary mb-1">${capitalizeFirstLetter(manager.getRole())}</p>
                            <p class="text-muted font-size-sm">ID: ${manager.getId()}</p>                                
                            <a class="btn btn-outline-primary" href="mailto:${manager.getEmail()}" role="btn">Message</a>
                        </div>
                    </div>

                    <ul class="list-group list-group-flush my-4">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0">
                                <i class="fa-regular fa-envelope fa-lg"></i>
                            </h6>
                            <span class="text-secondary mx-2"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0">
                                <i class="fa-solid fa-phone fa-lg"></i>
                            </h6>
                            <span class="text-secondary mx-2">${manager.getOfficeNumber()}</span>
                        </li>

                    </ul>
                </div>
            </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
            <div class="card border-dark bg-light m-2">
                <div class="card-body ">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="" alt="" class="rounded-circle p-1" width="110">
                        <div class="mt-3">
                            <h4>${capitalizeFirstLetter(engineer.getName())}</h4>
                            <p class="text-secondary mb-1">${capitalizeFirstLetter(engineer.getRole())}</p>
                            <p class="text-muted font-size-sm">ID: ${engineer.getId()}</p>                                
                            <a class="btn btn-outline-primary" href="mailto:${engineer.getEmail()}" role="btn">Message</a>
                        </div>
                    </div>

                    <ul class="list-group list-group-flush my-4">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0">
                                <i class="fa-regular fa-envelope fa-lg"></i>
                            </h6>
                            <span class="text-secondary mx-2"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0">
                                <i class="fa-brands fa-github fa-lg"></i>
                            </h6>
                            <span class="text-secondary mx-2"><a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.githubUsername}</a></span>
                        </li>

                    </ul>
                </div>
            </div>
        
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
            <div class="card border-dark bg-light m-2">
                <div class="card-body ">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="" alt="" class="rounded-circle p-1" width="110">
                        <div class="mt-3">
                            <h4>${capitalizeFirstLetter(intern.getName())}</h4>
                            <p class="text-secondary mb-1">${capitalizeFirstLetter(intern.getRole())}</p>
                            <p class="text-muted font-size-sm">ID: ${intern.getId()}</p>                                
                            <a class="btn btn-outline-primary" href="mailto:${intern.getEmail()}" role="btn">Message</a>
                        </div>
                    </div>

                    <ul class="list-group list-group-flush my-4">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0">
                                <i class="fa-regular fa-envelope fa-lg"></i>
                            </h6>
                            <span class="text-secondary mx-2"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0">
                                <i class="fa-solid fa-school fa-lg"></i>
                            </h6>
                            <span class="text-secondary mx-2">${intern.getSchool()}</span>
                        </li>

                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">

    <!-- ICONS CSS-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <!-- Jquery-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-info">
                <h1 class="text-center m-5">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <!-- insert data start -->
                ${generateTeam(team)}
                <!-- insert data end -->
            </div>
        </div>
    </div>

    <!-- JS -->
    <script src="https://kit.fontawesome.com/4a2812a7e8.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>

</body>
</html>
    `;
};