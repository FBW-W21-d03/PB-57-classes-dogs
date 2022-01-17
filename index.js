
class Hund {
    constructor(name, rasse, alter) {
        this.name = name;
        this.rasse = rasse;
        this.alter= alter;
    }
    bellen(){
        console.log(this.name ,`${": Wuff! Wuff! Wuff!"}`);
    }

}

let amy = new Hund("Amy","AmericanBully",4);
let coco = new Hund ("Coco","GermanShepard", 3);
let gelato = new Hund ("Gelato","Husky", 5);

amy.bellen();
coco.bellen();
gelato.bellen();