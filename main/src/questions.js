
const manager = [
    {
        type: 'input',
        message: "What is your Manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'number',
    },
];


const engineer = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their github username?',
        name: 'github',
    },
];


const intern = [
    {
        type: 'input',
        message: "What is the Intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school do they attend?',
        name: 'school',
    },
];

const nextMember = [{
    name: "selection",
    type: 'list',
    message: 'What would you like to do next?',
    choices: [ 
        'Add Engineer', 
        'Add Intern', 
        'End' 
    ]
}];


const questions = {
    nextMember: nextMember,
    manager: manager,
    engineer: engineer,
    intern: intern
};



module.exports = questions;