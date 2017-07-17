'use strict'
class Class {
    constructor(number) {
        this.number = number;
        this.leader = "";
        this.teathers = [];
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

    isIn(student) {
        if (student.klass == this.number)
            return true;
        else
            return false;
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
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
        for (let klass of klasses) {
            klass.teathers.push(this);
        }
    }

    introduce() {
        let klassesSum = new String();
        let result = new String();
        for (let index = 0; index < this.klasses.length; index++) {
            if (index == this.klasses.length - 1)
                klassesSum += this.klasses[index].number;
            else
                klassesSum += this.klasses[index].number + ',';
        }
        if (this.klasses.length == 0)
            result = super.introduce() + ' I am a Teacher. I teach No Class.';
        else {
            result = super.introduce() + ` I am a Teacher. I teach Class ${klassesSum}.`;

        }
        return result;
    }

    introduceWith(Student) {
        for (let a of this.klasses) {
            if (Student.klass == a.number) {
                return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach "
                    + Student.name + ".";
            }
            else {
                return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I don't " +
                    "teach " + Student.name + ".";
            }
        }

    }

    isTeaching(Student) {
        for (let klass of this.klasses) {
            if (klass.isIn(Student))
                return true;
        }
        return false;
    }
}
let klass1 = new Class("1");
let student1 = new Student(14, "Tom", "21", klass1);
let teacher1 = new Teacher(15, "Tom", "25", [klass1]);
console.log(teacher1.isTeaching(student1));

