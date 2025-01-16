const mahasiswa = {
  nama: "syauqi",
  umur: 17,
};

const nama = Symbol();
mahasiswa[nama] = "ran";

console.log(mahasiswa); // {nama: "syauqi", umur: 17, Symbol(): "rizqi"}
console.log(mahasiswa[nama]); // ran
