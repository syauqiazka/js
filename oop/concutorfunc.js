// Some code
function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}
 
Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
 
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
 
Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
} 
 // Some code
const Car1 = new Car('Ford', 'red', 200, 'f-1');
const Car2 = new Car('Honda', 'black', 300, 'h-1');
const Car3 = new Car('Toyota', 'white', 400, 't-1');
 
console.log(Car1);
console.log(Car2);
console.log(Car3);

Car1.drive();
Car2.drive();
Car3.drive();