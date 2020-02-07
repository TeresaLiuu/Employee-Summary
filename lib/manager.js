'use strict';

const Employee = require ('../lib/employee');

class Manager extends Employee {
    constructor(id, name, title, email, officeNumber){
        super(id, name, title, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }

};



module.exports = Manager;
