class Hunde{
    constructor(Hundename, Rasse, Alter){
        this.hundeHundeName= Hundename;
        this.hundeRasse= Rasse;
        this.hundeAlter= Alter;
    };
    Bellen(){
    console.log("Wuff! Wuff! Wuff!");
    }
};

let hunde_1 = new Hunde("Mila","Amercian", 4 );
let hunde_2 = new Hunde("Amy", "Collie", 12);
let hunde_3 = new Hunde("Coco", "Rottweiler", 6);



console.log(hunde_1, hunde_2, hunde_3);

hunde_1.Bellen("Mila");
hunde_2.Bellen("Amy");
hunde_3.Bellen("Coco");