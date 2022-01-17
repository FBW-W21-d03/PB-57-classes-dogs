// Aufgabenstellung - Teil 1
class Hund{
    constructor(name, rasse , alter){
        this.name = name;
        this.rasse = rasse;
        this.alter = alter;
    }
// Aufgabenstellung - Teil 3
// Erweitere deine Klasse nun um eine Funktion.    
     bellen(){
         console.log(this.name + ":" , "Wuff! Wuff! Wuff!");
     }
}

// Aufgabenstellung - Teil 2
let hund1 = new Hund ("Ajax" , "Dogge" , 3);
let hund2 = new Hund ("Tiffy" , "Pinscher" , 5);
let hund3 = new Hund ("Tüte" , "Terrier" , 1);


// Aufgabenstellung - Teil 4
hund1.bellen();
hund2.bellen();
hund3.bellen();






