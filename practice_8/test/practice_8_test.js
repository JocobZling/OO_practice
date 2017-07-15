'use strict'

describe('practice_8_test', () => {


    it('Create a Person(Tom,21),should print My name is Tom. I am 21 years old.', () => {
        let output = new Person("Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old.";
        expect(output).toEqual(result);
    });

    it('Create a Student(Tom,21,klass),should print My name is Tom. I am 21 years old. I am a Student. ' +
        'I am at Class 2.', () => {
        let klass =new Class("2").number;
        let output = new Student("Tom", "21", klass).introduce();
        let result = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(Tom,21,2),should print My name is Tom. I am 21 years old. I am a Teacher. ' +
        'I teach Class 2.', () => {
        let output = new Teacher("Tom", "21","2").introduce();
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(Tom,21),should print My name is Tom. I am 21 years old. I am a Teacher. ' +
        'I teach Class 2.', () => {
        let output = new Teacher("Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(Tom,21,2)intruduceWith way,should print My name is Tom. ' +
        'I am 21 years old. I am a Teacher. I teach Jerry.', () => {
        let klass =new Class("2").number;
        let student =new Student("Jerry","12",klass);
        let output = new Teacher("Tom", "21","2").introduceWith(student);
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(Tom,21,2)intruduceWith way,should print My name is Tom. ' +
        "I am 21 years old. I am a Teacher. I don't teach Jerry.", () => {
        let klass =new Class("1").number;
        let student =new Student("Jerry","12",klass);
        let output = new Teacher("Tom", "21","2").introduceWith(student);
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.";
        expect(output).toEqual(result);
    });
});
