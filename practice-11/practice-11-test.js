'use strict';

describe('practice-2', () => {

    // let practice = require("practice-2.js");

    it('should print person introduce ', () => {
        const result = 'My name is Tom. I am 21 years old.';
        let person = new Person(1,"Tom",21);
        expect(person.introduce()).toEqual(result);
    });

    it("should print student introduce ", () => {
        const result = 'My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.';
        const result2 = 'My name is Mary. I am 21 years old. I am a Student. I am at Class 2.';
        let klass = new Class(2);
        let tom = new Student(1,"Tom",21,klass);
        let mary = new Student(2,"Mary",21,klass);
        klass.appendMember(tom);
        klass.assignLeader(tom);
        expect(tom.introduce()).toEqual(result);
        expect(mary.introduce()).toEqual(result2);
    });

    it("should print student introduce ", () => {
        const result = 'It is not one of us.';
        const result2 = 'My name is Mary. I am 21 years old. I am a Student. I am at Class 2.';
        let klass = new Class(2);
        let tom = new Student(1,"Tom",21,klass);
        let mary = new Student(2,"Mary",21,klass);
        klass.assignLeader(tom);
        expect(tom.introduce()).toEqual(result);
        expect(mary.introduce()).toEqual(result2);
    });

    it("should print teacher introduce ", () => {
        const result1 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.';
        const result2 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.';
        const result3 = 'My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2,3.';
        let teacher1 = new Teacher(1,"Tom",21,[new Class(2)]);
        let teacher2 = new Teacher(1,"Tom",21,[]);
        let teacher3 = new Teacher(1,"Tom",21,[new Class(2),new Class(3)]);
        expect(teacher1.introduce()).toEqual(result1);
        expect(teacher2.introduce()).toEqual(result2);
        expect(teacher3.introduce()).toEqual(result3);
    });


    it('test function isTeaching()', () => {
        let klass1 = new Class(2);
        let klass2 = new Class(3);
        let tom = new Student(1,"Tom",21,klass1);
        let mary = new Student(2,"Mary",21,klass2);
        let jerry = new Student(3,"Jerry",21,new Class(4));
        let teacher = new Teacher(1,'Tom',21,[klass1,klass2]);

        expect(teacher.isTeaching(tom)).toEqual(true);
        expect(teacher.isTeaching(mary)).toEqual(true);
        expect(teacher.isTeaching(jerry)).toEqual(false);


    });

    // it('should print Teacher.introduceWith()', () => {
    //     const result1 = `My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.`;
    //     const result2 = `My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jack.`;
    //     let klass = new Class(2);
    //     let jack = new Student(1,'Jack',21,new Class(3));
    //     let jerry = new Student(2,'Jerry',21,klass);
    //     let teacher = new Teacher(3,'Tom',21,klass);
    //
    //     expect(teacher.introduceWith(jack)).toEqual(result2);
    //     expect(teacher.introduceWith(jerry)).toEqual(result1);
    // });


});
