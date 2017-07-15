'use strict'

describe('practice_6_test', () => {


    it('Create a Person(Tom,21),should print My name is Tom. I am 21 years old.', () => {
        // let practice =require("../practice_2/main/practice_2.js");
        let output = new Person("Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old.";
        expect(output).toEqual(result);
    });

    it('Create a Student(Tom,21,2),should print My name is Tom. I am 21 years old. I am a Student. ' +
        'I am at Class 2.', () => {
        // let practice =require("../practice_2/main/practice_2.js");
        let output = new Student("Tom", "21", "2").introduce();
        let result = "My name is Tom. I am 21 years old. I am at Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Worker(Tom,21),should print My name is Tom. I am 21 years old. ' +
        'I am a Worker. I have a job. ', () => {
        // let practice =require("../practice_2/main/practice_2.js");
        let output = new Worker("Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old. I am a Worker. I have a job.";
        expect(output).toEqual(result);
    });
});
