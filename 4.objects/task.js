function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(!this.marks) return
    this.marks.push(mark)
}

Student.prototype.addMarks = function (...mark) {
    if(!this.marks) return
    this.marks.push(...mark)

}

Student.prototype.getAverage = function () {
    if (!this.marks) return 0
    return this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0)
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}