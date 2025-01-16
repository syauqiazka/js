let hewan = ["hiu", "jerapah", "kucing", "bebek", "monyet"];
console.log(hewan[4]); // monyet
console.log(hewan[0]); // hiu
hewan.push("ayam"); // menambahkan ayam
console.log(hewan);  // ["hiu", "jerapah", "kucing", "bebek", "monyet", "ayam"]
hewan.pop(); // menghapus ayam
console.log(hewan); // ["hiu", "jerapah", "kucing", "bebek", "monyet"]

const binatanang = ["hiu", "jerapah", "kucing", "bebek", "monyet"];
binatanang[5] = "ayam";
console.log(binatangan); // ["hiu", "jerapah", "kucing", "bebek", "monyet", "ayam"]