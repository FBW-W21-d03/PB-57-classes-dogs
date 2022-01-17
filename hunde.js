/*
Beispiel zu Klassen und Objekten
*/
class Hund{
    constructor(name, rasse, alter){
        this.name = name;
        this.rasse = rasse;
        this.alter = alter;
    }
    bellen() {
        console.log("wuff! wuff! wuff!")

        console.log(this.name + " " + this.rasse + " " + this.alter + " belt... wuff! wuff! wuff!");
    }
}

let alex = new Hund("alex", "Bulldogge", 5);
let max = new Hund("max", "husky", 7);
let daisy = new Hund("daisy", "schäferhund", 10);


alex.bellen();
max.bellen();
daisy.bellen();

