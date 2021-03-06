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
        let student = new Student("Tom",21,new Class(2));
        expect(student.introduce()).toEqual(result);
    });

    it("should print teacher introduce ", () => {
        const result1 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        const result2 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        let teacher1 = new Teacher("Tom",21,new Class(2));
        let teacher2 = new Teacher("Tom",21);
        expect(teacher1.introduce()).toEqual(result1);
        expect(teacher2.introduce()).toEqual(result2);
    });

    it('should print Teacher.introduceWith()', () => {
        const result1 = `My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.`;
        const result2 = `My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jack.`;
        let klass = new Class(2);
        let jack = new Student('Jack',21,new Class(3));
        let jerry = new Student('Jerry',21,klass);
        let teacher = new Teacher('Tom',21,klass);

        expect(teacher.introduceWith(jack)).toEqual(result2);
        expect(teacher.introduceWith(jerry)).toEqual(result1);
    });


});
