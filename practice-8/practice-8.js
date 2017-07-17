'use strict';

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }

    basicIntroduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
    }
}

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        let result;
        if(typeof this.klass === 'undefined'){
            result = `${super.introduce()} I am a Teacher. I teach No Class.`;
        }else {
            result = `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`
        }
        return result;
    }

    introduceWith(student){
        let result;
        if(student.klass === this.klass){
            result = `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
        }else{
            result = `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
        }
        return result;
    }
}

class Class {
    constructor(number){
        this.number=number;
    }
}

module.exports = {
    Person ,
    Student,
    Teacher,
    Class
};