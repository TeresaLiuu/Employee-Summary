'use strict';

const Intern = require ('../lib/intern');

describe ('Intern', () =>{
    let intern;
    beforeEach(()=>{
        intern = new Intern (0, 'Teresa','test@gmail.com', 'UW');
    });
    describe('Initialization', () =>{
        it ('should create an object with an "school" property ', () =>{
            expect(intern.school).toEqual('UW');
        });
    });
    describe('getSchool', () =>{
        it('should get the school of the intern', () =>{
            expect (intern.getSchool()).toEqual('UW');
        });
    });
    describe('getRole',()=>{
        it('should get the Role of the intern', () => {
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});