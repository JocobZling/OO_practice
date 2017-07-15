'use strict'
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }
}
class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(Student) {
        this.leader = Student.name;
        return this.leader;
    }
}
class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (Class.leader===this.name) {//没传进来
            return super.introduce() + " I am a Student. I am Leader of Class " + this.klass + "."
        }
        else {
            return super.introduce() + " I am a Student. I am at Class " + this.klass + ".";
        }
    }
}
class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass ==null) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klass + ".";
        }
    }

    introduceWith(Student) {
        if (Student.klass ==this.klass) {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach "
                + Student.name + ".";
        }
        else {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I don't " +
                "teach " + Student.name + ".";
        }

    }
}
let a = new Class("2");
let student = new Student(1, "Tom", "21", a.number);
a.assignLeader(student);
let b = a.leader;
let output = student.introduce();
console.log(b);
console.log(output);