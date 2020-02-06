const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = [{
    type: 'input',
    name: 'managerName',
    message: 'What is your manager\'s name ?'
},
{
    type: 'input',
    name: 'managerId',
    message: 'What is your manager\'s ID ?'
},
{
    type: 'input',
    name: 'managerEmail',
    message: 'What is your manager\'s email ?'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your manager\'s office number ?'
}];

const teamChoiceQuestions = [{
    type: 'list',
    name: 'employeeType',
    message: 'Which type of team member would you like to add ? ',
    choices: ['Engineer', 'Intern', 'No']
}];

const engineerQuestions = [{
    type: 'input',
    name: 'engineerName',
    message: 'What is your engineer\'s name ?'
},
{
    type: 'input',
    name: 'engineerId',
    message: 'What is your engineer\'s ID ?'
},
{
    type: 'input',
    name: 'engineerEmail',
    message: 'What is your engineer\'s email ?'
},
{
    type: 'input',
    name: 'engineerGithub',
    message: 'What is your engineer\'s github user name ?'
}];


const internQuestions = [{
    type: 'input',
    name: 'internName',
    message: 'What is your intern\'s name ?'
},
{
    type: 'input',
    name: 'internId',
    message: 'What is your intern\'s ID ?'
},
{
    type: 'input',
    name: 'internEmail',
    message: 'What is your intern\'s email ?'
},
{
    type: 'input',
    name: 'internSchool',
    message: 'What is your intern\'s school ?'
}];

function addManager() {
    
    return inquirer.prompt(managerQuestions);
    
};



async function addEngineer() {
    
    const engineerInput = await inquirer.prompt(engineerQuestions);
    await chooseMember()
    
};

async function addIntern() {
    
    const internInput = await inquirer.prompt(internQuestions);
    await chooseMember()
};

function teamChoices(){
return inquirer.prompt(teamChoiceQuestions);
};


async function chooseMember(){
    const teamChoicesInput = await teamChoices();
    
    switch (teamChoicesInput.employeeType){
        case 'Engineer' :
            await addEngineer();       
        break;
        case 'Intern':
            await addIntern();      
        break;
        default :
        console.log ('write html');
        break;
    }
 };


module.exports = {
    addManager ,
    teamChoices,
    addEngineer,
    addIntern,
    chooseMember
}



