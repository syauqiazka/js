//SOAL 1
let bahasa_programan = [];
bahasa_programan.push("Python");
bahasa_programan.push("Java");
bahasa_programan.push("JavaScript");
bahasa_programan.push("PHP");
bahasa_programan.push("C++");
bahasa_programan.pop();
console.log(bahasa_programan);

//SOAL2

let numbers = [3, 9, 12, 15];
numbers.unshift(0);
console.log(numbers);
numbers.shift();
console.log(numbers);
console.log(numbers[0]);

//SOAL3

let ages = [18, 22, 16, 25, 30, 14, 17, 15, 24];
ages.filter((age) => age >= 18);
adultages = ages.filter((age) => age >= 18);
console.log(adultages);

//SOAL4

let nomer = [2, 4, 6,];
let addnomer = [1, 3, 5];
allnomer = nomer.concat(addnomer);
console.log(allnomer);

//SOAL5
let colors = ["red", "black", "blue", "yellow", "green",];
let colorsdeleted = colors.splice(1, 2);
let colorsadd = colors.splice(3,1, "orange" , "pink");
console.log(colors);