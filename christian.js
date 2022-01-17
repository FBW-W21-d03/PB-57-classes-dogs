class Hund {
  constructor(name, rasse, alter) {
    this.name = name;
    this.rasse = rasse;
    this.alter = alter;
  }
  bellen() {
    //   Eigentliche Lösung
    // console.log("Wuff! Wuff! Wuff!");

    // Zusatz: Bellen und Name
    console.log(this.name + " bellt... Wuff! Wuff! Wuff!");
  }
}

let max = new Hund("Max", "Husky", 10);
let daisy = new Hund("Daisy", "Corgie", 2);
let luna = new Hund("Luna", "Schäferhund", 6);

max.bellen();
daisy.bellen();
luna.bellen();
