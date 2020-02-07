'use strict';

const Employee = require ('../lib/employee');
class Intern extends Employee {
    constructor(id, name, title, email, school){
        super(id, name, title, email)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;