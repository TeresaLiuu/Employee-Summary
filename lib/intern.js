'use strict';

const Employee = require ('../lib/employee');
class Intern extends Employee {
    constructor(school){
        super(0, 'Teresa', 'engineer','test@gmail.com')
        this.school = school;
    }
    getSchool(school){
        return this.school
    };
    getRole(){
        return 'Intern';
    };
}

module.exports = Intern;