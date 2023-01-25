//Day 06 :OOPS TASK
//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.
class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
  class movie {
      constructor(title, studio, rating){
          this.title = title;
          this.studio = studio;
          this.rating = "PG";
      }
  }
  
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,the studio “Eon Productions”, and the rating “PG­13”
  
  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");

  //2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

  var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

//3.Write a “person” class to hold all the details.
class person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}
 
let person1 = new person ("Haritha", "Viswanathan", 25 );
console.log(person1.age);
console.log(person1.getFullName());

//4.write a class to calculate the uber price.
class uberFare {
    constructor (city, fare, customerName) {
        this.city = city;
        this.fare = fare;
        this.customerName  = customerName;
 
    }
        getFareCity(){
            return "fare for the City is " +  this.fare;
        }
 
}
 
let cityA = new uberFare( "cityA", 600, "customer1");
let cityB = new uberFare( "cityB", 300, "customer2");
 
console.log(cityA.getFareCity()); // 600
console.log(cityB.getFareCity()); // 300
