'use strict';

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const html = require('./template/generateHtml');
const questions = require('./lib/questions');
const fs = require('fs');

async function init() {
    try {
        const managerInput = await questions.addManager();
        const manager = new Manager(managerInput.id.value)
        const index = html.generateHtml(manager);
        fs.writeFileSync('index.html', index, (err) =>{
            console.log(err)
        });
    }
    catch (error) {
        console.error(error);
    }
    await questions.chooseMember();
}



init()

