const users = [
  {
    name: "sarip",
    age: 16,
    gender: "male",
  },
  {
    name: "arfin",
    age: 17,
    gender: "female",
  },
  {
    name: "tiara",
    age: 16,
    gender: "female",
    },
  {
    name: "ran",
    age: 17,
    gender: "female",
    }

];

const userfemale = users.filter((user) => user.gender === "female");

console.log(userfemale);

