// 1
const mobil = {
  merek: 'Toyota',
  model: 'Avanza',
  tahun: 2024
}
console.log(`${mobil.merek}  ${mobil.tahun}`);

//2
let buku = {
  Judul: "Pemrograman JavaScript",
  penulis: "syauqi",
  harga: 85000,
};

// Menambah properti penerbit
buku.penerbit = "PT Sentausa Abadi";

// Mengubah nilai properti harga
buku.harga = 90000;

// Menampilkan objek buku setelah perubahan
console.log(buku);


// Soal 3

const orang = {
  nama: "Rafka Aditya Ramadhan",
  umur: 15,
  hobi: 'Progtaming',
};

console.log(`"Halo, nama saya ${orang.nama}, saya berumur ${orang.umur}, dan saya memiliki hobi ${orang.hobi}`);
