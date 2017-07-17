'use strict'
class Class {
    constructor(number) {
        this.number = number;
        this.leader = "";
    }

    assignLeader(Student) {
        this.leader = Student.name;
    }
}
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
class Student extends Person {
    constructor(id, name, age, Class) {
        super(id, name, age);
        this.klass = Class.number;
        this.inClass = Class;
    }

    introduce() {
        if (this.inClass.leader == this.name) {
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
        if (Student.klass == this.klass) {
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
let student1 = new Student(10, "Tom", "21", a);
a.assignLeader(student1)
let student2 = new Student(11, "Jerry", "22", a);
console.log(student1.introduce());
console.log(student2.introduce());
