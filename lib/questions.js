const Engineer = require('./engineer');
const Intern = require('./intern');

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
    message: 'What is your manager\'s ID ?',
    validate : function(value){
        let inputChar = value.match ('[0-9]');
        if (inputChar){
            return true;
        }
        return 'Please enter a valid number';
    }
},
{    type: 'input',
    name: 'managerEmail',
    message: 'What is your manager\'s email ?'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your manager\'s office number ?',
    validate : function(value){
        let inputChar = value.match ('[0-9]');
        if (inputChar){
            return true;
        }
        return 'Please enter a valid number';
    }
}];

const teamChoiceQuestions = [{
    type: 'list',
    name: 'employeeType',
    message: 'Which type of team member would you like to add ? ',
    choices: ['Engineer', 'Intern', 'No, I am done adding']
}];

const engineerQuestions = [{
    type: 'input',
    name: 'engineerName',
    message: 'What is your engineer\'s name ?'
},
{
    type: 'input',
    name: 'engineerId',
    message: 'What is your engineer\'s ID ?',
    validate : function(value){
        let inputChar = value.match ('[0-9]');
        if (inputChar){
            return true;
        }
        return 'Please enter a valid number';
    }
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
    message: 'What is your intern\'s ID ?',
    validate : function(value){
        let inputChar = value.match ('[0-9]');
        if (inputChar){
            return true;
        }
        return 'Please enter a valid number';
    }
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

async function addEngineer(teamMembers) {
    
    const engineerInput = await inquirer.prompt(engineerQuestions);
    
    const engineer = new Engineer (
        engineerInput.engineerId,
        engineerInput.engineerName,
        engineerInput.engineerEmail,
        engineerInput.engineerGithub)
    teamMembers.push(engineer);
    await chooseMember(teamMembers)   
};

async function addIntern(teamMembers) {
    const internInput = await inquirer.prompt(internQuestions);
    const intern = new Intern (
        internInput.internId,
        internInput.internName,
        internInput.internEmail,
        internInput.internSchool)      
    teamMembers.push(intern);
    await chooseMember(teamMembers)
};

function teamChoices(){
return inquirer.prompt(teamChoiceQuestions);
};


async function chooseMember(teamMembers){
    const teamChoicesInput = await teamChoices();
    
    switch (teamChoicesInput.employeeType){
        case 'Engineer' :
            await addEngineer(teamMembers);       
        break;
        case 'Intern':
            await addIntern(teamMembers);      
        break;
        default :
            console.log('write html');
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

