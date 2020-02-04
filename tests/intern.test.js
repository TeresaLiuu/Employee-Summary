'use strict';

const Intern = require ('../lib/intern');
describe ('Intern', () =>{
    let intern;
    beforeEach(()=>{
        intern = new Intern ('UW');
    });
    describe('Initialization', () =>{
        it ('should create an object with an "school" property ', () =>{
            expect(intern.school).toEqual('UW');
        });
    });
    describe('getSchool', () =>{
        it('should get the school name of the intern', () =>{
            expect (intern.getSchool()).toEqual('UW');
        });
    });
});