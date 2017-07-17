'use strict'
class Class {
    constructor(number) {
        this.number = number;
        this.leader = "";
    }

    assignLeader(Student) {
        if (Student.klass == this.number) {
            this.leader = Student.name;
        }
        else {
            console.log('It is not one of us.');
        }
    }

    appendMember(Student) {
        Student.klass = this.number;
        Student.inClass = this;
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
        if (this.klass == null) {
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
/*
let klass2 = new Class("2");
let klass1 = new Class("1");
let student1 = new Student(12, "Tom", "21", klass1);
let student2 = new Student(13, "Jerry", "22", klass2);
klass2.assignLeader(student1);
klass2.assignLeader(student2);
console.log(student1.introduce());
console.log(student2.introduce());
klass2.appendMember(student1);
//klass2.assignLeader(student1);
console.log(student1.introduce());*/
