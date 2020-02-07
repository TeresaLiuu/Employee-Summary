'use strict';

const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(id, name, title, email, githubName) {
        super(id, name, title, email)
        this.githubName = githubName;
    };
    getGithub(){
        return this.githubName;
    }
    getRole(){
        return 'Engineer';
    }
};

module.exports = Engineer;