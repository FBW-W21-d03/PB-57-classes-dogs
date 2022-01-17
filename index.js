"use strict";

class Hunde {
  constructor(Hundename, Rasse, Alter) {
    this.hundeName = Hundename;
    this.hundeRasse = Rasse;
    this.hundeAlter = Alter;
  }
  HundBellen() {
    console.log("Bell! Bell! Fass!");
  }
}
// 2 )
let hund_1 = new Hunde("Asgard", "Rottweiler", 9);
let hund_2 = new Hunde("Trixi", "Dakel", 12);
let hund_3 = new Hunde("Rex", "Schaeferhund", 4);
// 3 )
const alleHunde = [];
let hunde = alleHunde.push(hund_1, hund_2, hund_3);
console.log(alleHunde);
hund_1.HundBellen();
hund_2.HundBellen();
hund_3.HundBellen();
