// function to choose an uncommon data based on each employee role to add to the employee card
function uncommonData(employee) {
    role = employee.getRole();
    switch (role) {
        case 'Manager':
            return `Office Number: <a href="tel:${employee.getOfficeNumber()}" target="_blank">${employee.getOfficeNumber()}</a>`;
        case 'Engineer':
            return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        case 'Intern':
            return `School: ${employee.getSchool()}`;
    };
};

// function to generate the card for each employee. The bottom li element has the uncommonData for that employee
function generateCard(employee) {
    return `
    <div class="card m-1 rounded shadow-lg" style="width: 18rem;">
        <div class="card-body bg-danger rounded-top">
            <h5 class="card-title text-light text-center">${employee.getRole()}</h5>
            <p class="card-text text-light text-center">${employee.getName()}</p>
        </div>
        <div class="card">
            <div class="card-body bg-light rounded-bottom">
                <ul class="list-group list-group-flush border rounded">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></li>
                    <li class="list-group-item">${uncommonData(employee)}</li>
                </ul>
            </div>
        </div>
    </div>`;
};

// function to generate the rest of the pages html
function generateHTML(employees) {
    // creates empty string for the generated cards html
    let generatedCards = "";
    
    // for loop to iterate over the employees array and generate a card for each employee
    for (const employee in employees) {
        generatedCards += `${generateCard(employees[employee])}`;
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <title>My Team!</title>
    </head>
    <body>
    
        <div class="jumbotron jumbotron-fluid bg-primary">
            <div class="container">
                <h1 class="display-4 text-light text-center">My Team!</h1>
            </div>
        </div>
    
        <main class="container d-flex flex-wrap justify-content-around">
        ${generatedCards}
        </main>    
        
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    </body>
    </html>`;
};

// exports the generateHTML function for the index.js file
module.exports = generateHTML;