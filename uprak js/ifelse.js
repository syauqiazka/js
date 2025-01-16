const nilai = 200;

if (nilai <= 100 && nilai >= 80) {
  console.log("Grade: A");
} else if (nilai < 80 && nilai >= 60) {
  console.log("Grade: B");
} else if (nilai < 60 && nilai >= 40) {
  console.log("Grade: C");
} else if (nilai < 40 && nilai >= 20) {
  console.log("Grade: D");
} else if (nilai < 20 && nilai >= 0) {
  console.log("Grade: E");
} else {
  console.log("Nilai tidak valid");
}
