// requiring all the assets I use in this file
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const questions = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

// deconstructing the questions object
const { nextMember, manager, engineer, intern } = questions;

// create an empty employee array to store employee objects
const employees = [];

// calling the initialize function
init();

// initialize function, inquirering about the manager first then 
// creating an employee object before calling the ask next question function
async function init() {
    const results = await inquirer.prompt(manager);
    newEmployee(results, 'Manager');
    // console.log(results)
    nextQuestion();
};


// function to ask next question with inquirer
async function nextQuestion() {
    // async inquirer prompt for newMember, deconstructs selection object to isolate the value the user chooses in the inquirer prompt 
    const {selection} = await inquirer.prompt(nextMember);
    
    console.log('\n');
    
    // selections based on the users choice in the nextMember inquirer question
    switch(selection){
        case 'Add Engineer':
            return addEngineer();
        case 'Add Intern':
            return addIntern();
        case 'End':
            return endApp();
    };

}


// function to create new employee with each roles class, then pushes the employee object into the employees array
function newEmployee(results, role) {
    // Deconstructing the inquirer prompt
    const { name, id, email, number, school, github} = results;
    
    // Switch case to create new employee based on role
    switch (role) {
        case 'Engineer':
            employees.push(new Engineer (name, id, email, github));
            break;
        case 'Intern':
            employees.push(new Intern (name, id, email, school));
            break;
        case 'Manager':
            employees.push(new Manager (name, id, email, number));
    };
};


// function to inquire for a new engineer
async function addEngineer(){
    // inquier prompt with engineer questions
    const results = await inquirer.prompt(engineer);
    // create new employee based on the results, and chooses engineer for newEmployee() switch case
    newEmployee(results, 'Engineer');
    // calls nextQuestion function
    nextQuestion();
};


// function to inquire for a new intern, same as engineer
async function addIntern(){
    const results = await inquirer.prompt(intern);
    newEmployee(results, 'Intern');
    nextQuestion();
};
        

// function to either end inquirer and generate the employee HTML page, or continue to add new employees
async function endApp(){
    const wantToQuit = await inquirer.prompt([
        {
            name: 'quit',
            type: 'confirm',
            message: 'Are you sure you are finished building your team?'
        }
    ]);

    // deconstructs wantToQuit value
    const {quit} = wantToQuit
    // switch case for quit or continue
    switch(quit){
        case true:
            // call writeFile() function to generate HTML with employee data
            writeFile(generateHTML(employees));
            // console.log('Success! Check the dist folder for your index.HTML file')
            // process.exit();
            break
        case false:
            console.log('\n')
            nextQuestion();
    };
};


// function to write the HTML file
function writeFile(data) {
    // uses file system package to write file with the generateHTML data
    fs.writeFile(
        "./dist/index.html",
        data,
        (err) => 
        err ? console.error(err) : console.log('Success! Check the dist folder for your index.HTML file')
      );
};