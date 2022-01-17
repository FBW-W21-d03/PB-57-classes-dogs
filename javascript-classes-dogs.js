// Aufgabe Teil 1

class Hund {
  constructor(name, rasse, alter) {
    this.name = name;
    this.rasse = rasse;
    this.alter = alter;
  }

  // Aufgabe Teil 3

  bellen() {
    console.log("Wuff! Wuff! Wuff!");
  }
}


// Aufgabe Teil 2

let hund_1 = new Hund("Milla", "buldog", 2);
let hund_2 = new Hund("Penny", "pudel", 3);
let hund_3 = new Hund("Katy", "doberman", 1);


// Aufgabe Teil 4

hund_1.bellen();
hund_2.bellen();
hund_3.bellen();