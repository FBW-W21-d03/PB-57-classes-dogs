class hunde {
    constructor(Hundename, Rasse, Alter) {
        this.Hundename = Hundename;
        this.Rasse = Rasse;
        this.Alter = Alter;
    }
    hndbellen() {
        console.log("Wuff! Wuff! Wuff!");
    }
};
//* 2*//
let Hund1 = new hunde("Reks", "slogy", 6);

let Hund2 = new hunde("Amlah", "Hascky", 8);
let Hund3 = new hunde("Abka", "Hascky", 4);
//* 3*//
const hundeschule = [];

let Hunde = hundeschule.push(Hund1, Hund2, Hund3);
console.log(hundeschule);

Hund1.hndbellen();
Hund1.hndbellen();
Hund1.hndbellen();

