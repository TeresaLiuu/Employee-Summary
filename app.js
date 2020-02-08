'use strict';
// installed packages
const fs = require('fs');

// class files
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const questions = require('./lib/questions');

// template files
const indexTemp = require('./template/indexTemp');
const engineerTemp = require ('./template/engineerTemp');
const internTemp = require ('./template/internTemp');
const managerTemp = require ('./template/managerTemp');

const teamMembers = []; //add team members to the array


// function membersArray (){
//     const member =  
// }


function generateMembers () {
    const myTeam =[] ; //generate html from teamMembers array
    teamMembers.forEach(member =>{
        switch(member.getRole()){
            case 'Manager' :
                let man = managerTemp(member);
                return myTeam.push(man);
            case 'Engineer':
                let eng = engineerTemp(member);
                return myTeam.push(eng);
            case 'Intern':
                let int = indexTemp(member);
                return myTeam.push(int);
            default:
                console.log('something is wrong');
        }
    });
    const index = indexTemp(myTeam.join("\n"));
    generateHtml (index);
}

function generateHtml (html){
    fs.writeFile('./output/TeamMembers.html',html, (err) =>{
        console.error;
    })
}


async function init() {
    try {
        const managerInput = await questions.addManager();      
    }
    catch (error) {
        console.error(error);
    }
    await questions.chooseMember();
}




init()

