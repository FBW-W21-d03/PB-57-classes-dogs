class Hund {
  constructor(hundName, rasse, alter) {
    this.hundName = hundName;
    this.rasse = rasse;
    this.alter = alter;
  }
  bellen() {
    console.log("Wuff Wuff Wuff");
  }
};
let hund = new Hund("Tommie", "Französische_Bulldogge", "3 Monat" );

console.log(hunde);
hund.bellen();