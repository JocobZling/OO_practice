'use strict'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }

}

class Student {
    constructor(name, age, klass) {
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    introduce() {
        return "My name is " + this.name + ". I am " + this.age +
            " years old. I am at Class " + this.klass + ".";
    }

}
module.exports={
    Person:Person,
    Student:Student
}
/*
var a = new Person("Tom","21");
console.log(a.introduce());
var b = new student("Tom","21","2");
console.log(b.introduce());*/
