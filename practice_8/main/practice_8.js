'use strict'
class Class {
    constructor(number) {
        this.number = number;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }

}

class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + " I am a Student. I am at Class " + this.klass + ".";
    }

}
class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
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
l/*et a = new Class("2").number;
console.log(a);
let student = new Student("Jerry", "12", a);
let b = student.klass;
console.log(student);
console.log(b);
let output = new Teacher("Tom", "21", "2").introduceWith(student);
console.log(output);*/