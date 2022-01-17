// # javascript-classes-dogs

// Wir möchten eine Klasse schreiben, mit der wir Hunde modellieren können.

// ## Aufgabenstellung - Teil 1
// Schreibe eine Klasse, die an ihre Objekte folgende Eigenschaften üergibt
// 1. Hundename
// 2. Rasse
// 3. Alter
class Hunde{
    constructor(name, rasse, alt){
    this.HundName = name;
    this.HundRasse = rasse;
    this.HundAlter = alt;
}
}
// ## Aufgabenstellung - Teil 2
// Verwende nun deine Klasse, um mindestens drei Objekte zu erzeugen.


// Finde selbst Hundenamen und weise ihnen eine Rasse und ein Alter zu.
let hund_1 = new Hunde("Ares", "Pitbull", 8);
let hund_2 = new Hunde("Bigy", "Bolonka", 4);
let hund_3 = new Hunde("Ric", "Chihuahua",2);

// ## Aufgabenstellung - Teil 3
// Erweitere deine Klasse nun um eine Funktion.
hund_1.impfung("Ja");
// Ein Hund soll bellen können.
hund_2.bellen(true);
// Schreibe dazu eine Funktion ohne Parameter, die folgenden Text in die Konsole schreibt.
if (Hunde == bellen){
    console.log("Wuff! Wuff! Wuff!");
} else {
    console.log("Hunden sind ruhig");
}
// "Wuff! Wuff! Wuff!"

// ## Aufgabenstellung - Teil 4
// Teste die Methode mit allen Hunden.

// Kann jeder deiner Hunde bellen?
