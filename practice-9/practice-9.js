'use strict';

class Person{
    constructor(id,name,age){
        this.id = id;
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
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        let result;
        if(this === this.klass.leader){
            result = `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }else {
            result = `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }
        return result;
    }
}

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
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

    assignLeader(student){
        this.leader = student;
    }
}

module.exports = {
    Person ,
    Student,
    Teacher,
    Class
};