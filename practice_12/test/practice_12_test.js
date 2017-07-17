'use strict'

describe('practice_11_test', () => {
    it('Create a Person(1,Tom,21),should print My name is Tom. I am 21 years old.', () => {
        let output = new Person(1, "Tom", "21").introduce();
        let result = "My name is Tom. I am 21 years old.";
        expect(output).toEqual(result);
    });
    it('Create a Student(2,cc,21,Class),should print My name is cc. I am 21 years old. I am a Student. ' +
        'I am at Class 2.', () => {
        let a = new Class("2");
        let output = new Student(2, "cc", "21", a).introduce();
        let result = "My name is cc. I am 21 years old. I am a Student. I am at Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Student(1,Tom,21,Class)and set this Student is a leader,should print My name is Tom. I am 21 years old. I am a Student. ' +
        'I am at Class 2.', () => {
        let a = new Class("2");
        let student = new Student(1, "Tom", "21", a);
        a.assignLeader(student);
        let output = student.introduce();
        let result = "My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21,2),should print My name is Tom. I am 21 years old. I am a Teacher. ' +
        'I teach Class 2.', () => {
        let  a = new Class("2");
        let output = new Teacher(1, "Tom", "21", [a]).introduce();
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21),should print My name is Tom. I am 21 years old. I am a Teacher. ' +
        'I teach Class 2.', () => {
        let output = new Teacher(1, "Tom", "21",[]).introduce();
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21,2)intruduceWith way,should print My name is Tom. ' +
        'I am 21 years old. I am a Teacher. I teach Jerry.', () => {
        let a = new Class("2");
        let student = new Student(1, "Jerry", "12", a);
        let teacher = new Teacher(1, "Tom", "21", [a])
        let output = teacher.introduceWith(student);
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.";
        expect(output).toEqual(result);
    });
    it('Create a Teacher(1,Tom,21,2)intruduceWith way,should print My name is Tom. ' +
        "I am 21 years old. I am a Teacher. I don't teach Jerry.", () => {
        let a = new Class("3");
        let b = new Class("2");
        let student = new Student(1, "Jerry", "12", a);
        let teacher = new Teacher(1, "Tom", "21", [b]);
        let output = teacher.introduceWith(student);
        let result = "My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.";
        expect(output).toEqual(result);
    });
    it(`when student no in class and can add this student in this class,should print student can't to be leader and 
    am in this class`, () => {
        spyOn(console, 'log');
        let klass2 = new Class("2");
        let klass1 = new Class("1");
        let student1 = new Student(12, "Tom", "21", klass1);
        let student2 = new Student(13, "Jerry", "22", klass2);
        klass2.assignLeader(student1);
        klass2.assignLeader(student2);
        expect(console.log).toHaveBeenCalledWith('It is not one of us.');
        klass2.appendMember(student1);
        klass2.assignLeader(student1);
        expect(student1.introduce()).toEqual('My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.');
    });
    it(`when student  in teacher's class,should print true`, () => {
        let klass1 = new Class("1");
        let student1 = new Student(14, "Tom", "21", klass1);
        let teacher1 = new Teacher(15, "Tom", "25", [klass1]);
        expect(teacher1.isTeaching(student1)).toBe(true);
    });
    it(`when student no in class can joined this Class and become leader of this Class,should print I am Tom. I know Jerry 
    has joined Class 1 and I am Tom. I know Jerry become Leader of Class 1`,()=>{
        spyOn(console, 'log');
        let klass1=new Class("1");
        let student1=new Student(16,"Jerry","22",klass1);
        let teacher1=new Teacher(17,"Tom","25",[klass1]);
        klass1.appendMember(student1);
        expect(console.log).toHaveBeenCalledWith('I am Tom. I know Jerry has joined Class 1.');
        klass1.assignLeader(student1);
        expect(console.log).toHaveBeenCalledWith('I am Tom. I know Jerry become Leader of Class 1.');
    });
});
