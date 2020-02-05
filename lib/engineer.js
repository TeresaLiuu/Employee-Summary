'use strict';

const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(githubName) {
        super(0, 'Teresa', 'engineer', 'test@gmail.com')
        this.githubName = githubName;
    };
    getGithub(){
        return this.githubName;
    }
    getRole(){
        return 'Engineer';
    };
};

module.exports = Engineer;