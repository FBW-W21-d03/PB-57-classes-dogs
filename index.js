class Hunde {
  constructor(hundeName, rasse, alter) {
    this.hundeName = hundeName;
    this.rasse = rasse;
    this.alter = alter;
  }
  bellen() {
    console.log("Wuff Wuff Wuff");
  }
};
let hunde = new Hunde("Tommie", "Französische_Bulldogge", "3 Monat" );

console.log(hunde);
hunde.bellen();