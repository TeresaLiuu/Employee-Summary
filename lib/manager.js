'use strict';

const Employee = require ('../lib/employee');

class Manager extends Employee {
    constructor(officeNumber){
        super(0, 'Teresa', 'engineer','test@gmail.com')
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    };

};



module.exports = Manager;
