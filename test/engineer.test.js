'use strict';

const Engineer = require('../lib/engineer');
describe('Engineer', () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer('teresa', 'TeresaLiuu');
    });
    describe('Initialization', () => {
        it('should create an object with an "githubName" property', () => {
            expect(engineer.githubName).toEqual('teresa');
        });
    });
    describe('getGithub', () => {
        it('should get the Github from the engineer', () => {
            expect(engineer.getGithub()).toEqual('TeresaLiiuu');
        });
    });
    describe('getRole',()=>{
        it('should get the Role of the engineer', () => {
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});