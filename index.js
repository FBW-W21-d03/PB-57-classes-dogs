class Hund{
constructor(name,rasse,alter){
    this.Hundename = name;
    this.Hunderasse = rasse;
    this.Alter = alter;
};

bellen(){
    console.log("Wuff Wuff Wuff");
}
};


let hund_1 = new Hund("Ace", "Schäferhund", "6 Monate");
let hund_2 = new Hund("Bello", "Bulldog", " 7 Jahre");
let hund_3 = new Hund("Rex", "Schäferhund-Bulldog", "1 Monate");

let hunde = [hund_1, hund_2, hund_3];
console.log(hunde);
hund_1.bellen();
hund_2.bellen();
hund_3.bellen();
