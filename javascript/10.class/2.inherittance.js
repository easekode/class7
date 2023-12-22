class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

// DRY: Don't Repeat Yourself
class Teacher extends Person {
  // inherritance
  constructor(name, age, subject, teacherId) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.subject = subject;
    this.teacherId = teacherId;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.studentId = studentId;
  }
}

const teacher = new Teacher("Sachin", 30, "English", "TEACHER100");
teacher.greeting();

const student = new Student("Virat", 20, "STUDENT001");
student.greeting();
