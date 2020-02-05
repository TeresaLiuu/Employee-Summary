const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = [{
    type: 'input',
    name: 'managerName',
    message: 'What is your manager name ?'
},
{
    type: 'input',
    name: 'managerId',
    message: 'What is your manager ID ?'
},
{
    type: 'input',
    name: 'managerEmail',
    message: 'What is your manager email ?'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your manager office number ?'
}];

const engineerQuestions = [{
    type: 'input',
    name: 'engineerName',
    message: 'What is your engineer name ?'
},
{
    type: 'input',
    name: 'engineerId',
    message: 'What is your engineer ID ?'
},
{
    type: 'input',
    name: 'engineerEmail',
    message: 'What is your engineer email ?'
},
{
    type: 'input',
    name: 'engineerGithub',
    message: 'What is your engineer github user name ?'
}];


const internQuestions = [{
    type: 'input',
    name: 'internName',
    message: 'What is your intern name ?'
},
{
    type: 'input',
    name: 'internId',
    message: 'What is your intern ID ?'
},
{
    type: 'input',
    name: 'internEmail',
    message: 'What is your intern email ?'
},
{
    type: 'input',
    name: 'internSchool',
    message: 'What is your intern school ?'
}];

async function addManager() {
    try {
        const manager = await inquirer.prompt(managerQuestions);
    }
    catch (error) {
        console.error(error);
    }
};

async function addEngineer() {
    try {
        const manager = await inquirer.prompt(engineerQuestions);
    }
    catch (error) {
        console.error(error);
    }
};

async function addIntern() {
    try {
        const manager = await inquirer.prompt(internQuestions);
    }
    catch (error) {
        console.error(error);
    }
};

function generateHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c9c3a0343e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <title>${name}'s Resume</title>
        <style>
        
        
        </style>
    </head>
    <body>
    
    
    
    </body>
    
    </html>`

};
