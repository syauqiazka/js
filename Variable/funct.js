function cihuyy() {
    return console.log("uhuyyyy");
}

cihuyy();

function greeting(name, languege) {
    if(languege === "en") {
        console.log(`hello ${name}`);
        } else if (languege === "jp") {
            console.log(`こんにちは ${name}`);
        } else {
        console.log(`selamat pagi ${name}`);
        }
}

greeting("syauqi", "jp");

//

const cihuy = (nama, bahasa) => {
    if(bahasa === "en") {
        return `hello ${nama}`;
        } else if (bahasa === "jp") {
            return `こんにちは ${nama}`;
        } else {
        return `selamat pagi ${nama}`;
    }
}
console.log(cihuy("syauqi", "en"));