'use strict'

describe('practice_9_test', () => {

    it('Create a Person(1,Tom,21),should print My name is Tom. I am 21 years old.', () => {
        let output = new Person(1, "Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old.";
        expect(output).toEqual(result);
    });

    it('Create a Student(2,cc,21,Class),should print My name is cc. I am 21 years old. I am a Student. ' +
        'I am at Class 2.', () => {
        let a = new Class("2").number;
        let output = new Student(2, "cc", "21", a).introduce();
        let result = "My name is cc. I am 21 years old. I am a Student. I am at Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Student(1,Tom,21,Class)and set this Student is a leader,should print My name is Tom. I am 21 years old. I am a Student. ' +
        'I am at Class 2.', () => {
        let a = new Class("2");
        let student = new Student(1, "Tom", "21", a.number);
        a.assignLeader(student);
        let output = student.introduce();
        let result = "My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21,2),should print My name is Tom. I am 21 years old. I am a Teacher. ' +
        'I teach Class 2.', () => {
        let output = new Teacher(1, "Tom", "21", "2").introduce();
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21),should print My name is Tom. I am 21 years old. I am a Teacher. ' +
        'I teach Class 2.', () => {
        let output = new Teacher(1, "Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21,2)intruduceWith way,should print My name is Tom. ' +
        'I am 21 years old. I am a Teacher. I teach Jerry.', () => {
        let a = new Class("2").number;
        let student = new Student(1, "Jerry", "12", a);
        let output = new Teacher(1, "Tom", "21", "2").introduceWith(student);
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21,2)intruduceWith way,should print My name is Tom. ' +
        "I am 21 years old. I am a Teacher. I don't teach Jerry.", () => {
        let a = new Class("3").number;
        let student = new Student(1, "Jerry", "12", a);
        let output = new Teacher(1, "Tom", "21", "2").introduceWith(student);
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.";
        expect(output).toEqual(result);
    });
});
