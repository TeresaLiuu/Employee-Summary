'use strict';

const manager = require ('./lib/manager');
const engineer = require ('./lib/engineer');
const intern = require ('./lib/intern');
const html = require('./template/generateHtml');
const fs = require ('fs');
const questions = require ('./questions');

async function init(){
    try{
        const managerInput = await questions.addManager();
    }
    catch(error){
        console.error(error);
    }
    await questions.chooseMember();
}
 



init()