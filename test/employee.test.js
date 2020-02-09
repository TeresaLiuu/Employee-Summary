'use strict';

const Employee = require('../lib/employee');

describe('Employee', () => {
    let employee;
    beforeEach(() => {
        employee = new Employee(0, 'Teresa', 'test@gmail.com');
    });
    describe('Initialization', () => {
        it('should create an object with an "id" property', () => {
            expect(employee.id).toEqual(0);
        });
        it('should create an object with an "name" property', () => {
            expect(employee.name).toEqual('Teresa');
        });
        it('should create an object with an "email" property',() =>{
            expect(employee.email).toEqual('test@gmail.com');
        })
    }); 
    describe('getId', () => {
        it('should get the Id of the employee', () => {
            expect(employee.getId()).toEqual(0);
        });
    });
    describe('getName', () => {
        it('should get the Name of the employee', () => {
            expect(employee.getName()).toEqual('Teresa');
        });
    });
    describe('getEmail', () => {
        it('should get the Email of the employee', () =>{
            expect(employee.getEmail()).toEqual('test@gmail.com');
        });
    });
    describe('getRole',()=>{
        it('should get the Role of the employee', () => {
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});