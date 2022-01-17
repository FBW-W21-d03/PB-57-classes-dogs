/////Aufgabenstellung - Teil 1
////Schreibe eine Klasse, die an ihre Objekte folgende Eigenschaften üergibt

/* Hundename
Rasse
Alter */


class Hund{
    constructor(name,rasse,alter){
        this.Hundename = name;
        this.Hunderasse = rasse;
        this.Alter = alter;
    };
    

    /* Aufgabenstellung - Teil 2
Verwende nun deine Klasse, um mindestens drei Objekte zu erzeugen.

Finde selbst Hundenamen und weise ihnen eine Rasse und ein Alter zu. */


    rocky(){
        console.log("Wuff! Wuff! Wuff! Wuff! Wuff! Wuff!");
    }
    };
    
    /* Aufgabenstellung - Teil 3
Erweitere deine Klasse nun um eine Funktion.

Ein Hund soll bellen können.

Schreibe dazu eine Funktion ohne Parameter, die folgenden Text in die Konsole schreibt.

"Wuff! Wuff! Wuff!" */

    let hund1 = new Hund("Coco", "Amy", "3 Monate");
    let hund2 = new Hund("Bello", "Bulldog", " 3 Jahre");
    let hund3 = new Hund("Buddy", "German Shepard", "2 Monat");
    
    /* Aufgabenstellung - Teil 4
Teste die Methode mit allen Hunden.

Kann jeder deiner Hunde bellen? */

    let hunde = [hund1, hund2, hund3];
    console.log(hunde);
    hund1.rocky();
    hund2.rocky();
    hund3.rocky();