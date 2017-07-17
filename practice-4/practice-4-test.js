'use strict';

describe('practice-2', () => {

    // let practice = require("practice-2.js");

    it('should print person introduce ', () => {
        const result = 'My name is Tom. I am 21 years old.';
        let person = new Person("Tom",21);
        expect(person.introduce()).toEqual(result);
    });

    it("should print student introduce ", () => {
        const result = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        let student = new Student("Tom",21,2);
        expect(student.introduce()).toEqual(result);
    });

    it('should print worker introduce ', () => {
        const result = `My name is Tom. I am 21 years old. I am a Worker. I have a job.`;
        let worker = new Worker('Tom',21);
        expect(worker.introduce()).toEqual(result);
    });



});
