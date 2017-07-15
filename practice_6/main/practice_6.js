'use strict'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    basicIntroduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }
    introduce() {
        let a = new Person(this.name, this.age).basicIntroduce();
        return a;
    }
}

class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        let a = new Student(this.name, this.age, this.klass).basicIntroduce();
        return a + " I am at Class " + this.klass + ".";
    }
}
class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }
    introduce() {
        let a = new Worker(this.name, this.age).basicIntroduce();
        return a + " I am a Worker. I have a job."
    }
}
module.exports = {
    Person: Person,
    Student: Student,
    Worker: Worker
}
