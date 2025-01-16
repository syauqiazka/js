const buku = {
  judul: "JavaScript for Beginners",
  penulis: "HambaAllah",
  tahunTerbit: 2023
};

for (let prop in buku) {
  console.log(prop + ": " + buku[prop]);
}