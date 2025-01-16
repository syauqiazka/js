const values = [1, 2, 3, 4, 5, 6];

const value = values.find((elemen) => elemen < 5);

console.log(value); // 1


const users = [
  {
    name: 'syauqi',
    age: 16,
    gender: 'male',
  },
  {
    name: 'zio',
    age: 17,
    gender: 'male',
  },
  {
    name: 'alip',
    age: 16,
    gender: 'male',
    },
  {
    name: 'breza',
    age: 16,
    gender: 'male',
}
];

const user = users.find((user) => user.name === 'syauqi');

console.log(user); // {name: 'syauqi', age: 16, gender: 'male'}