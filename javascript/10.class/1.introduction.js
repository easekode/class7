/*
{
    name: Sachin
    score: [90, 50, 50]
    totalScore: function() {}
}


Car 
- 4 wheels
- steering

Honda:
  - object is an instance of class(Car) Car X 1000

Maruti: 
  - object is an instance of class(Car) Car X 1000

Living being:
    age: 

    Human inherits properties of Living being
        Person : class is a prototype:
            name
            

        Sachin is a Person: (name, age)
    Pets 
        Tommy is a Dog
*/
class Person {
  // Person is the class name
  // constructor is a function used to initialize the class
  constructor(ageInput, nameInput, scoreArray) {
    this.age = ageInput;
    this.name = nameInput;
    this.scores = scoreArray;
  }

  getTotalScore() {
    // the total score of Sachin is 60
    console.log("no total score calculated for", this.name);
  }
}

const sachin = new Person(30, "Sachin", [10, 20, 30]);
sachin.getTotalScore();
// console.log(sachin);
const virat = new Person(29, "Virat", [10, 11, 90]);
virat.getTotalScore();
// console.log(virat);
