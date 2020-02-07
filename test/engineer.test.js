'use strict';

const Engineer = require('../lib/engineer');
describe('Engineer', () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer(0, 'Teresa', 'engineer', 'test@gmail.com', 'TeresaLiuu');
    });
    describe('Initialization', () => {
        it('should create an object with an "githubName" property', () => {
            expect(engineer.githubName).toEqual('TeresaLiuu');
        });
    });
    describe('getGithub', () => {
        it('should get the Github from the engineer', () => {
            expect(engineer.getGithub()).toEqual('TeresaLiuu');
        });
    });
    describe('getRole',()=>{
        it('should get the Role of the engineer', () => {
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});