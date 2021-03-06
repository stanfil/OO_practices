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
        let isAddedIntoClass = 0;
    }

    introduce(){
        let result;
        if(this === this.klass.leader){
            if(this.isAddedIntoClass===1){
                result = `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
            }else{
                result = `It is not one of us.`;
            }
        }else {
            result = `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }
        return result;
    }
}

class Teacher extends Person{
    constructor(id,name,age,classes){
        super(id,name,age);
        this.classes = classes;
        for(let cla of this.classes){
            cla.teachers.push(this);
        }
    }

    introduce(){
        let result,cla='';
        for(let v=0;v<this.classes.length;v++){
            if(v>0) cla+=',';
            cla+=this.classes[v].number;
        }
        if(this.classes.length === 0){
            result = `${super.introduce()} I am a Teacher. I teach No Class.`;
        }else {
            result = `${super.introduce()} I am a Teacher. I teach Class ${cla}.`
        }
        return result;
    }

    isTeaching(student){
        let result = false;
        for(let cla of this.classes){
            if(cla.isIn(student)){
                result = true;break;
            }
        }
        return result;
    }

    appendSpeach(student){
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
    }

    leaderSpeach(student){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`)
    }
    // introduceWith(student){
    //     let result;
    //     if(student.klass === this.klass){
    //         result = `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
    //     }else{
    //         result = `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
    //     }
    //     return result;
    // }
}

class Class {
    constructor(number){
        this.number=number;
        this.teachers = [];
    }

    assignLeader(student){
        this.leader = student;
        for(let teacher of this.teachers){
            teacher.leaderSpeach(student);
        }
    }

    appendMember(student){
        student.isAddedIntoClass = 1;
        for(let teacher of this.teachers){
            teacher.appendSpeach(student);
        }
    }

    isIn(student){
        let result;
        if(student.klass===this) result = true;
        else result = false;
        return result;
    }
}

module.exports = {
    Person ,
    Student,
    Teacher,
    Class
};