'use strict';

const Manager = require ('../lib/manager');
describe ('Manager',() =>{
    let manager;
    beforeEach(()=>{
        manager = new Manager(1);        
    });
    describe('Initialization', () => {
        it ('should create an object with an "officeNumber" property', () =>{
            expect(manager.officeNumber).toEqual(1);
        });
    });
    describe('getRole',()=>{
        it('should get the Role of the manager', () => {
            expect(manager.getRole()).toEqual('Manager');
        });
    });
})