const nilai = 100;

if (nilai <= 100 && nilai >= 92) {
    console.log("Sangat Baik");
} else if (nilai < 91 && nilai >= 84) {
    console.log("Baik");
} else if (nilai < 83 && nilai >= 75) {
    console.log("Cukup");
} else if (nilai < 75 && nilai >= 0) {
    console.log("Kurang");
}  else {
    console.log("Nilai tidak valid");
}